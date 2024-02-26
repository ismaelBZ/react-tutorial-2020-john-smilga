import {useState, useEffect} from 'react'

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }
  
  useEffect(() => {
   
    console.log('use effect')
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize)
    }
  })
  console.log('Outside render step: size = ' + size);

  return (
    <>
      {console.log('Inside render step: size = ' + size)}
      <h2>Window Size</h2>
      <h3>{size}</h3> 
    </>
  );
}

export default UseEffectCleanUp