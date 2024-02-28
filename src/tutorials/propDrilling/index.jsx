import { useState } from "react";
import { data } from "./../../data.js";

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    return setPeople((people) => people.filter((person) => person.id !== id));
  };
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson}></List>
    </section>
  );
};

// Prop drilling realy means drilling one component to access another
// In this exemple we will drill list component to acces SinglePerson from PropDrilling Component

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        // {...person} is the spead opperator that allow us to pass all the props, this is cover on some commit in main branch 
        return <SinglePerson key={person.id} {...person} removePerson={removePerson}></SinglePerson>;
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <btn className="btn" onClick={() => removePerson(id)}>Remove</btn>
    </div>
  );
};

export default PropDrilling;
