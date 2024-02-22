import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <>
      <Person />
      <Message />
    </>
  );
}

/* Look, dont have brackets, really clean code */

const Person = () => <h1>john doe</h1>;
const Message = () => <p>This is my message</p>;

ReactDOM.render(<Greeting />, document.getElementById("root"));
