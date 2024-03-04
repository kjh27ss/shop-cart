import React from 'react'
// import Proptypes from 'prop-types'
import "./product.css";
import Product  from './Product'
import data from '../data/products'

const ProductList = ({
  setIsInCart,
  addToCart,
  setAddToCart
}) => {  
  return (
    <div>
        <h1 className='text-center m-5'>Products</h1>
        <ul className='proudct_list'>
            {data.map(product => (
              <li key={product.id} className="product_list_item">
                <Product {...product}
                setIsInCart={setIsInCart}
                addToCart={addToCart} 
                setAddToCart={setAddToCart}/>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductList