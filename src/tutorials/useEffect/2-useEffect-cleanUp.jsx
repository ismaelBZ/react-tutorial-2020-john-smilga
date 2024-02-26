import {useState, useEffect} from 'react'

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener('resize', checkSize);
  }, [])
  // START -> Render Ccomponent
  // 3 Tirth Step -> Re-render 
  return (
    <>
      <h2>Window Size</h2>
      <h3>{size}</h3> 
    </>
  );
}

export default UseEffectCleanUp