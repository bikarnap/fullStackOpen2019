import React, { useState } from 'react';

const Person = ({ person }) => <p>{person.name}</p>

const App = () => {
  const [ persons, setPersons ] = useState([
    {name: 'Arto Hellas', id: 1}
  ])
  const [ newName, setNewName ] = useState('new name')

  const names = () =>
    persons.map(person => 
      <Person 
          key={person.id}
          person={person}
      />    
  )

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName,
        id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewName('')
}

  const handleNewName = (event) => setNewName(event.target.value)


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{names()}</div>
    </div>
  )
}

export default App;
