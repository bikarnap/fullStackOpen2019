import React from 'react'

const PersonForm = (props) => {
    const{addNewPerson, newName, newNumber, handleNewName, handleNewNumber} = props
    
    return(
        <div>
            <form onSubmit={addNewPerson}>
                <p>name: <input value={newName} onChange={handleNewName} /></p>
                <p>number: <input value={newNumber} onChange={handleNewNumber} /></p>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm