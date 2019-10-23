import React from 'react';

const Persons = props => {
    return (
        props.persons.map(person =>
            <div>
                <p key={person.name}>{person.name} {person.number}</p>
                <button onClick={event => props.removePerson(event, person.name)}>Delete</button>
            </div>
        )
    )
};

export default Persons;