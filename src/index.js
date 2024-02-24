import React from "react";
import ReactDOM from "react-dom";
import { data } from "./data";
import { Book } from "./Book";

function BookList() {
  return (
    <>
      {data.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
