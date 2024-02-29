import {useFetch} from './../customHooks/2-customHook-useFecth'
import Product from './Product'

const url = "https://course-api.com/react-prop-types-example"

const PropTypes = () => {
  const {data: products} = useFetch(url);
  return (
    <>
      <h2>Product</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })} 
      </section>
    </>
  )
}

export default PropTypes