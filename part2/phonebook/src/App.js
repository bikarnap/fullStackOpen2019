import React, { useState } from 'react';

const Person = ({ person }) => <p>{person.name} {person.number}</p>

const App = () => {
  const [ persons, setPersons ] = useState([
    {name: 'Arto Hellas', number: '123-456-789'}
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNumber] = useState('')

  const names = () =>
    persons.map(person => 
      <Person 
          key={person.name}
          person={person}
      />    
  )

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    let nameExists = false
    for(let i = 0; i < persons.length; i++) {
      if(persons[i].name === personObject.name){
        nameExists = true
        break
      }
    }
    if(!nameExists) {
      setPersons(persons.concat(personObject))
      nameExists = false
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNumber('')
  }

  const handleNewName = (event) => setNewName(event.target.value)
  const handleNumber = (event) => setNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
        number: <input value={newNumber} onChange={handleNumber} />
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
