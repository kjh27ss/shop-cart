import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductList from './Component/ProductList'
import CartList from './Component/CartList';
import { FcPaid } from "react-icons/fc";

const App = () => {
  const [isInCart, setIsInCart] = useState(false);
  const [addToCart, setAddToCart] = useState([]); // data계속 추가되야 함 -> 배열 type 
  const [cartCount, setCartCount] = useState(false); 

  useEffect(() => {
    const cCount = addToCart.length;
    if(cCount > 0){
      setCartCount(true);
    }else{
      setCartCount(false);
    }
  }, [addToCart]);

  const closeOpenClick = () => {
    setIsInCart(!isInCart);
  }

  return (
    <>
    <Container>
      <header>
        <h1>MY SHOP</h1>
        <div className="cartbox" onClick={closeOpenClick}>
          <FcPaid className='cart' />
          {cartCount &&<span>{addToCart.length}</span>}
        </div>
      </header>
      <Row>
        <Col md={12}>
          <h1 className='text-center'>My SHOPPING CART</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ProductList setIsInCart={setIsInCart} addToCart={addToCart} setAddToCart={setAddToCart}/>
        </Col>  
        {
          isInCart && 
            <CartList addToCart={addToCart}  setAddToCart={setAddToCart} closeOpenClick={closeOpenClick}/>            
          
        }          
      </Row>      
    </Container>
    <footer className='mt-5 pt-3 pb-2 border-top text-white' style={{backgroundColor:"var(--bs-gray-700)"}}>
        <p className='text-center'>My React SHOP Cart</p>
      </footer>
    </>
  )
}

export default App