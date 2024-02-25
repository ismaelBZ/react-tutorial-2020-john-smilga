import { useState } from "react";
import { data } from "./../../data";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "john",
    age: 24,
    message: "random message",
  });
  console.log(people);
  return (
    <>
     <h1>{people.name}</h1>
    </>
  );
};

export default UseStateObject;
