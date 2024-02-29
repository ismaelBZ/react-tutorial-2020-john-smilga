import React, {useState, useContext} from 'react'
import {data} from "./../../data"

/** useContext / createContext 
 *  
 *  Drilling props make pass data throught intermediate compontents to the desired componet
 * Solution: useContext/Context API to simple case
 * Redux to complex cases
 * 
**/ 


const PersonContext = React.createContext();
// Access two component - provider, consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    return setPeople(newPeople)
  }

  return (
    <PersonContext.Provider value='hello'>
      <h2>ContextAPI</h2>
      <List people={people} removePerson={removePerson}/>
    </PersonContext.Provider>
  )
}

const List = ({people}, removePerson) => {
  return (
    <>
      {people.map(person => <Person {...person} removePerson={removePerson} /> )}
    </>
  )
}

const Person = ({name, id, removePerson}) => {
  const hello = useContext(PersonContext);
  console.log(hello);
  console.log()
  return (
    <div key={id} className='item'>
      <h2>{name}</h2>
      <button className="btn" onClick={()=>removePerson(id)}>Remove</button>
    </div>
  )
}

export default ContextAPI