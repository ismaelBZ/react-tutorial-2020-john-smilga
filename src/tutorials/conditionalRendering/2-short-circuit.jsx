import { useState, useFetch } from "react";
// shor-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('true');

  /* short-circuit */
  const firstValue = text && 'hello world' // text ? hello world : text 
  const secondValue = text || 'hello world'; // text ? text : 'hello World'
  
  return (
    <>
      <h2>First: {firstValue}</h2>
      <h2>Second: {secondValue}</h2>
    </>
  );
};

export default ShortCircuit;
