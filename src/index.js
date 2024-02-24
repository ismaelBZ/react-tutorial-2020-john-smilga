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

const books = [
  {
    id: 1,
    imageURL: "https://m.media-amazon.com/images/I/61p8sBPV5LL._SY342_.jpg",
    title: "A tartaruguinha",
    author: "Tia Cris",
  },

  {
    id: 2,
    imageURL: "https://m.media-amazon.com/images/I/418M2tXcVjL.AC_SX250.jpg",
    title: "Wish: o poder dos desejos",
    author: "Tea Orsi",
  }
]

const Book = (props) => {
  console.log(props)
  const { imageURL, author, title} = props;
  return (
    <article>
      <Image src={imageURL} />
      <Title>{title}</Title>
      <Author>{author}</Author>
    </article>
  );
};

function BookList() {
  return (
    <>
     {books.map((book) => {
      return (
        <Book key={book.id} {...book} />
      )
     })}
    </>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));


