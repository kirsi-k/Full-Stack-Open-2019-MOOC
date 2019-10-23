import React, {useState, useEffect} from 'react';
import Persons from './components/Persons';
import PersonsForm from './components/PersonsForm';
import FilterForm from './components/FilterForm';
import personService from './service/persons';
import Notification from './components/Notification';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filter, setFilter] = useState('');
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        personService
            .getAll()
            .then(response => {
                setPersons(response.data)
            })
    }, []);

    const showSuccess = (message) => {
        setSuccessMessage(message);

        setTimeout(() => {
            setSuccessMessage(null)
        }, 3000)
    };

    const showError = (error) => {
        setError(error);

        setTimeout(() => {
            setError(null)
        }, 3000)
    };

    const addPerson = event => {
        event.preventDefault();

        const person = {
            name: newName,
            number: newNumber
        };
        const existingPerson = persons.find(person => person.name === newName);
        if (!existingPerson) {
            personService
                .create(person)
                .then(response => {
                    setPersons(persons.concat(response));
                    setNewName('');
                    setNewNumber('');
                    showSuccess(`Added ${person.name}`)
                })
                .catch(error => {
                    showError(`Tapahtui virhe: ${error}`)
                })
        } else {
            const confirm = window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`);
            if (confirm) {
                personService
                    .update(existingPerson.id, person)
                    .then(response => {
                        setPersons(persons
                            .filter(p => p.name !== person.name)
                            .concat(response)
                        );
                        setNewName('');
                        setNewNumber('');
                        showSuccess(`Updated ${person.name}`)
                    })
                    .catch(error => {
                        showError(`Tapahtui virhe: ${error}`)
                    })
            }
        }
    };

    const removePerson = (event, name) => {
        event.preventDefault();
        const person = persons.find(person => person.name === name);
        if (person) {
            const confirm = window.confirm(`Delete ${person.name}?`);
            if (confirm) {
                personService
                    .remove(person.id)
                    .then(response => {
                        setPersons(persons.filter(p => p.id !== person.id));
                        showSuccess(`Deleted ${person.name}`)
                    })
                    .catch(error => {
                        showError(`Tapahtui virhe: ${error}`)
                    })
            }

        }
    };

    const filteredPersons = filter
        ? persons.filter(person => {
            return person.name.toLowerCase().includes(filter.toLowerCase())
        })
        : persons;

    return (
        <div>
            <h2>Phonebook</h2>
            <FilterForm
                filter={filter}
                setFilter={setFilter}/>
            <h3>Add a new</h3>
            <PersonsForm
                addPerson={addPerson}
                setNewName={setNewName}
                newName={newName}
                setNewNumber={setNewNumber}
                newNumber={newNumber}/>
            <Notification notification={successMessage} error={error}/>
            <h3>Numbers</h3>
            <Persons persons={filteredPersons} removePerson={removePerson}/>
        </div>
    )
};

export default App;