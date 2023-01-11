import React, { useContext } from 'react'
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import ButtonWithIcon from './common/ButtonWithIcon';

function ProductDetailsPreview({
  productDetails,
  decreaseCounter,
  increaseCounter,
  counter,
}) {
  const { cartItems, setCartItems } = useContext(CartContext);
   function isOnCart(id) {
     let isOnCart = false;
     cartItems.forEach((item) => {
       if (item.productId === id) {
         isOnCart = true;
       }
     });
     return isOnCart;
   }

  function addItemToCart() {
    
    let OnCart = isOnCart(productDetails.id);
    if (!OnCart) {
       let item = {
         productId: productDetails.id,
         productName: productDetails.title,
         productImage: productDetails.image,
         productPrice: productDetails.price,
         productQuantity: counter,
       };
      setCartItems((prevState) => [...prevState, item]);
    }else{
      let updatedCartItems= cartItems.map((item) => {
          if(item.productId== productDetails.id){
             item.productQuantity = item.productQuantity+counter;
          }
          return item;
       });
       setCartItems(updatedCartItems);
    }
    
  }
 
  return (
    <div className="product-details">
      <span className="company-name">{productDetails.company}</span>
      <h1 className="product-title">{productDetails.title}</h1>
      <p className="description">{productDetails.description}</p>
      <Row>
        <Col xs={9} sm={6} md={12} className="d-flex ">
          <span className="price">${productDetails.price}</span>
          <span className="discount">{productDetails.discount}</span>
        </Col>
        <Col xs={3} sm={6} md={12} className="d-flex ">
          <span className="oldPrice">${productDetails.oldPrice}</span>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={4}>
          <div aria-label="Basic example" className="btn-group">
            <Button
              variant="secondary"
              className="calculation"
              onClick={decreaseCounter}
            >
              -
            </Button>
            <span className="counter">{counter}</span>
            <Button
              variant="secondary"
              className="calculation"
              onClick={increaseCounter}
            >
              +
            </Button>
          </div>
        </Col>
        <Col xs={12} sm={12} md={8}>
          <ButtonWithIcon
            className="add-to-cart"
            variant="secondary"
            onClick={addItemToCart}
          >
            <i className="fa fa-cart-shopping"></i>Add to cart
          </ButtonWithIcon>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetailsPreview
