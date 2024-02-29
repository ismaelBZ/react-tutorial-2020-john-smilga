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
    <PersonContext.Provider value={{removePerson, people}}>
      <h2>ContextAPI</h2>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  const {people: peopleData} = useContext(PersonContext)
  return (
    <>
      {peopleData.map(person => <Person {...person} /> )}
    </>
  )
}

const Person = ({name, id}) => {
  const {removePerson} = useContext(PersonContext);
  return (
    <div key={id} className='item'>
      <h2>{name}</h2>
      <button className="btn" onClick={()=>removePerson(id)}>Remove</button>
    </div>
  )
}

export default ContextAPI