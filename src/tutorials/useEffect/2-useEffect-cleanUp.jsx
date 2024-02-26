import {useState, useEffect} from 'react'

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }
  
  useEffect(() => {
    //  DONT'T WORK
    setSize(window.innerWidth)
    //  DON'T WORK
    window.addEventListener('resize', setSize(window.innerWidth));
    /*  I think that the previous functions dont't work because the useEffect,
    like useState, storage the values needed in the register before start the
    function execution. */
    
    // WORK
    /*  Setting the value inside an anonymous functions, that's not stored and need
        to be called just in time */
    //window.addEventListener('resize', () => setSize(window.innerWidth));
    // WORK
    window.addEventListener('resize', checkSize)
  })
  console.log(size);

  return (
    <>
      <h2>Window Size</h2>
      <h3>{size}</h3> 
    </>
  );
}

export default UseEffectCleanUp