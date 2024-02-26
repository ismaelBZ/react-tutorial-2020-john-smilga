import {useState, useEffect} from 'react'

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  return (
    <>
      <h2>Window Size</h2>
      <h3>{size}</h3> 
    </>
  );
}

export default UseEffectCleanUp