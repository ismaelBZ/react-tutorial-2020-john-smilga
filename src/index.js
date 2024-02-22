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

const firstBook = {
  imageURL: "https://m.media-amazon.com/images/I/61p8sBPV5LL._SY342_.jpg",
  title: "A tartaruguinha",
  author: "Tia Cris"
}

const secondBook = {
  imageURL: "https://m.media-amazon.com/images/I/418M2tXcVjL.AC_SX250.jpg",
  title: "Wish: o poder dos desejos",
  author: "Tea Orsi" 
}


const Book = (props) => {
  return (
    <article>
      <Image src={props.img} />
      <Title>{props.title}</Title>
      <Author>{props.author}</Author>
    </article>
  );
};

function BookList() {
  return (
    <>
      <Book img={firstBook.imageURL} author={firstBook.author} title={firstBook.title} />
      <Book img={secondBook.imageURL} author={secondBook.author} title={secondBook.title} />
    </>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
