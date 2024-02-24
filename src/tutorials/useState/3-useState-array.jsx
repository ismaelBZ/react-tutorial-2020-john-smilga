import React from "react";
import { data } from "../../data";

const UseStateArray = () => {
  const [counter, setCounter] = React.useState(0);
  const handleClick = () => {
    counter >= 3 ? setCounter(0) : setCounter(counter + 1);
  }
  
  return (
    <>
    <h1 key={data[counter].id}>{data[counter].name}</h1>
    <button className="btn" onClick={handleClick}>Change Person</button>
    </>
  );
};

export default UseStateArray;
