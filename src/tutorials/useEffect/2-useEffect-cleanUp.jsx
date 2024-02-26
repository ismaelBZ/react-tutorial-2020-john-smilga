import {useState, useEffect} from 'react'

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }
  
  useEffect(() => {
   // 2 Second Step -> run useEffect
   // END -> run the use efect again
    console.log('use effect')
    window.addEventListener('resize', checkSize);
    return () => {
      // 4 Fourth Step -> Befor run useEffect again 
      // execute the clen up function/useEffect.return
      console.log('cleanup');
      window.removeEventListener('resize', checkSize)
    }
  })
  // START -> Render Ccomponent
  // 3 Tirth Step -> Re-render 
  console.log('Render');
  return (
    <>
      <h2>Window Size</h2>
      <h3>{size}</h3> 
    </>
  );
}

export default UseEffectCleanUp