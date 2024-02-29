import PropTypes from 'prop-types'

const Product = ({image, name, price}) => {
  return (
    <article className='product'>
      <img src={image.url} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Product;