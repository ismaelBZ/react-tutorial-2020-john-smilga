import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Author = styled.h2`
  font-size: 1.1rem;
`;

const Title = styled.h1`
  font-size: 1.4rem;
`;

const Image = styled.img``;

const title = "Wish: O Poder Dos Desejos";
const author = "Tea Orsi, Dante Luiz";
const image = "https://m.media-amazon.com/images/I/418M2tXcVjL.AC_SX250.jpg";

const Book = (props) => {
  return (
    <article>
      <Image src={image} />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <p>{props.editora}</p>
      <p>{props.ano}</p>
    </article>
  );
};

function BookList() {
  return (
    <>
      <Book editora="maio" ano={2022} />
      <Book editora="abril" />
    </>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
