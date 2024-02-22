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
    imageURL: "https://m.media-amazon.com/images/I/61p8sBPV5LL._SY342_.jpg",
    title: "A tartaruguinha",
    author: "Tia Cris",
  },

  {
    imageURL: "https://m.media-amazon.com/images/I/418M2tXcVjL.AC_SX250.jpg",
    title: "Wish: o poder dos desejos",
    author: "Tea Orsi",
  }
]

const Book = ({ image, author, title }) => {
  return (
    <article>
      <Image src={image} />
      <Title>{title}</Title>
      <Author>{author}</Author>
    </article>
  );
};


const names = ['john', 'peter', 'susan']
const newNames = names.map((name) => {
  return <h3>{name}</h3>
})
console.log(newNames);
function BookList() {
  return (
    <>
     {books.map(({imageURL, title, author}) => {
      return (
        <Book image={imageURL} 
              title={title} 
              author={author} 
        />
      )
     })}
    </>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));


