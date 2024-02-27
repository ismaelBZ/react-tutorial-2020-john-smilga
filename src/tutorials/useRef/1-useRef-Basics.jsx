import { useRef } from "react";

// One of the most uses of useRef is to ACCESS DOM properties
// useRef Dont TRIGGER re-render 
const UseRefBasics = () => {
  const refContainer = useRef('Values');

 

  return (
    <>
      <form className="form">
        <input type="text" ref={refContainer}/>
        <button className="btn" type='submit'>submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
