import React from "react";
import { data } from "../../data";

const UseStateArray = () => {
  const [counter, setCounter] = React.useState(0);
  const [people, setPeople] = React.useState(data);

  console.log(people);
  const handleClick = () => {
    counter >= 3 ? setCounter(0) : setCounter(counter + 1);
  }

  // Use methods that don't modify the original state, so can return de modified data to a new variable
  const removeName = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  
  return (
    <>
      <h1 key={data[counter].id}>{data[counter].name}</h1>
      <button className="btn" onClick={handleClick}>Change Person</button>
      {people.map(({id, name}) => {
        return (
          <div  className="item">
            <h4 key={id}>{name}</h4> 
            <button onClick={() => removeName(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" style={{marginTop: 0}} onClick={() => setPeople(data)}>Bring people back</button>
    </>
  );
};

export default UseStateArray;
