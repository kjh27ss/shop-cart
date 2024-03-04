import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const Cart = ({id,name,price,image, addToCart, setAddToCart}) => {
  const remove = () => {
    setAddToCart(addToCart.filter(ct => ct.id !== id)); // filter : 삭제할 값 빼고 다시 저장
  }  
  return (
    <div className='cartbox'>
        <img src={image} alt={name}/>
        <div className="cart-text col-8">
            <h5>{name}</h5>
            <div>{price} <AiOutlineClose className='cart-del' onClick={remove}/></div>
        </div>
    </div>
  )
}

export default Cart