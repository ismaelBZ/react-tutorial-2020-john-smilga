const Product = ({image, name, price}) => {
  return (
    <article className='product'>
      <img src={image.url} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
  );
};

export default Product;