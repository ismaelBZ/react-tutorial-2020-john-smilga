import {useState} from 'react';

export default function UseStateBasics() {

  const [data, setData] = useState(['Show Data', 'New Data']);
  let newData = data[0];

  // COMOPONENT ARE NOT RERENDERING
  const handleClick = () => {
    newData === data[1] ? newData = data[0] : newData = data[1];
    console.log(data);
    console.log(newData);
  }
  
  return (
    <>
      <button onClick={handleClick}>{newData}</button>
    </>
  )
}