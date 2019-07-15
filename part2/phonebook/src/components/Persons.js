import React from 'react'

const Persons = ({ persons, search }) => {
    const namesToShow = (search==='')
        ? persons
        : persons.filter(person => person.name.includes(search))

    const names = () =>
        namesToShow.map((person) => 
            <p key={person.name}>
                {person.name} {person.number}
            </p> 
        )
   
    return(
      <div>
          {names()}
      </div>
    )
}

export default Persons