import React from 'react'
import { Button } from 'react-bootstrap'
import Cart from './Cart'

const CartList = ({addToCart, setAddToCart, closeOpenClick}) => {
  return (
    <div className="cart-list">    
      <ul>
        {
          addToCart.map(mcart => (
            <li>
              <Cart key={mcart.id} id={mcart.id} name={mcart.name} price={mcart.price} image={mcart.image} />
            </li>
          ))
        }
      </ul>
      <div className="text-center">
        <Button className='button' variant='danger' onClick={closeOpenClick}>닫기</Button>
      </div>
    </div>
  )
}

export default CartList