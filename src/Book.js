import styled from "styled-components";

const Author = styled.h2`
  font-size: 1.1rem;
`;

const Title = styled.h1`
  font-size: 1.4rem;
`;

const Image = styled.img``;

const Book = ({ imageURL, author, title}) => {
  return (
    <article>
      <Image src={imageURL} />
      <Title>{title}</Title>
      <Author>{author}</Author>
    </article>
  );
};

export { Book };