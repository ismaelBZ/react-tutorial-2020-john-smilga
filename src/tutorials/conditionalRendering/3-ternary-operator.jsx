import { useState, useFetch } from "react";

/* Ternary Operator is usefull when whant two returnig conditions, if it's true and false */
const TernaryOperator = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  return (
    <>
      <h2>{text || "Default value"}</h2>
      <button className="btn" onClick={() => setTimeout(() => setIsError(!isError), 500)}>
        Toogle Error
      </button>
      {isError ? <h2>Error...</h2> : <h3>There is no error!</h3>}
    </>
  );
};

export default TernaryOperator;
