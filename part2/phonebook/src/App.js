import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNumber ] = useState('')
  const [ filteredName, setFilteredName ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
        .get('http://localhost:3001/persons')
        .then(response => {
          setPersons(response.data)
        })
  }, [])

  console.log('render', persons.length, 'persons')
  

  const nameExists = (personObject) => {
    let exists = false
    for(let i = 0; i < persons.length; i++) {
      if(persons[i].name === personObject.name) {
        exists = true
        break
      }
    }
    if(!exists) {
      setPersons(persons.concat(personObject))
      exists = false
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }
  
  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    nameExists(personObject)
    setNewName('')
    setNumber('')
  }

  const handleNewName = (event) => setNewName(event.target.value)
  const handleNumber = (event) => setNumber(event.target.value)
  const handleFilter = (event) => setFilteredName(event.target.value)
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={filteredName} handleSearch={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm addNewPerson={addNewPerson} 
                  newName={newName}
                  handleNewName={handleNewName}
                  newNumber={newNumber}
                  handleNewNumber={handleNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} search={filteredName}/>
    </div>
  )
}

export default App;
