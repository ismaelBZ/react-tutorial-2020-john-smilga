import { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);


  const complexIncrease = () => {
    console.log(value + 1);
    /* When we click multiple times, the value is assigned on click and stored in register 
    for a fast computing, so the function will be executed the clicked ammount times with the
    same value in an interval 
     */
    setTimeout(() => {
      setValue(value + 1);
    }, 1000 )
  }

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h3 style={{fontSize: "2rem"}}>{value}</h3>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Restet
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h3 style={{fontSize: "2rem"}}>{value}</h3>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
