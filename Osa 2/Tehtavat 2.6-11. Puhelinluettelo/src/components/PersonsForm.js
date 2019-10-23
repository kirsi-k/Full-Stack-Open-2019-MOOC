import React from 'react';

const PersonForm = props => {
    const handleNameChange = event => {
        props.setNewName(event.target.value)
    };
    const handleNumberChange = event => {
        props.setNewNumber(event.target.value)
    };
    return (
        <form onSubmit={props.addPerson}>
            <div>
                Name: <input onChange={handleNameChange} value={props.newName} />
                <br/>
                Number: <input onChange={handleNumberChange} value={props.newNumber} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
};
export default PersonForm;