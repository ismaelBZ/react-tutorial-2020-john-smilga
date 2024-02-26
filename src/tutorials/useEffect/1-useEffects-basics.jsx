import { useEffect, useState } from 'react';

export default function UseEffectBasics() {
  const [value, setValue] = useState(0);

  // By default runs after every re-render
  // cleanup function
  // second parameter
  useEffect(() => {
    console.log('call useEffect')
  }, []);
  console.log('render component');
  return(
    <>
      <h2>
        {value}
      </h2>
      <button className="btn" onClick={() => setValue(value + 1)}>Increase</button>
    </>
  );
}