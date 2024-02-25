import { useState } from "react";
import { data } from "./../../data";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "john",
    age: 24,
    message: "random message",
  });
  const changePerson = () => {
    setPeople('Peter')
  }
  console.log(people);
  return (
    <>
     <h1>{people.name}</h1>
     <h2>{people.age}</h2>
     <h2>{people.message}</h2>
     <button className='btn' onClick={changePerson}>
      Change Person
     </button>
    </>
  );
};

export default UseStateObject;
