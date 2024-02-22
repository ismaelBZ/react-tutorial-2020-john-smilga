import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </>
  );
}

/* Look, dont have brackets, really clean code */

const Book = () => <article>This is a book.</article>;

ReactDOM.render(<BookList />, document.getElementById("root"));
