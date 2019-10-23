import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Persons from './components/Persons';
import PersonsForm from './components/PersonsForm';
import FilterForm from './components/FilterForm';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

    const getPersons = async () => {
        const response = await axios.get('http://localhost:3001/persons');
        setPersons(response.data)
    };

    useEffect(() => {
        getPersons()
    }, []);

    const addPerson = event => {
        event.preventDefault();

        const person = {
            name: newName,
            number: newNumber
        };

        if (persons.find(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(person));
            setNewName('');
            setNewNumber('');
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
        <h3>Numbers</h3>
        <Persons persons={filteredPersons}/>
      </div>
  )

};

export default App;