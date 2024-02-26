import { useState, useFetch } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false)
  return (
    <>
      <h2>{text || 'Default value'}</h2>
      <button className='btn' onClick={() => setTimeout((() => setIsError(!isError)), 500)}>Toogle Error</button>
      {isError && <h1>Error...</h1>}
    </>
  );
};

export default ShortCircuit;
