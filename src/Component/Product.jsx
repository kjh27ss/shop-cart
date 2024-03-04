import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'

const Product = ({
    id, name, price, orPrice, image, setIsInCart, addToCart, setAddToCart
}) => {
  const handleClick = () => {
    const newCart = {id, name, price, orPrice, image};
    const prevCart = addToCart;
    setAddToCart([...prevCart, newCart]); // 배열 추가
    setIsInCart(true);
    console.log(addToCart);
  }  
  return (
    <div className="product thumbnail">
        <img src={image} alt="{name}"/>
        <h6 className='product_title'>{name}</h6>
        <div className="product_price">
            <span>{price}</span><del>{orPrice}</del>
        </div>
        <Button className='button' variant='primary' 
        onClick={handleClick}>cart</Button>
    </div>
  )
}

export default Product