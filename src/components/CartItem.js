import React from 'react'
import { Image } from 'react-bootstrap';
import ButtonWithIcon from './common/ButtonWithIcon';

const CartItem = ({ item, id, deleteItemInCart }) => {
    console.log(id)
  return (
    <div className="products-in-cart">
      <div className="product-in-cart-details">
        <Image
          src={item.productImage}
          className="product-details-image"
        ></Image>
        <div className="product-details-name-price">
          <p className="product-details-name">{item.productName}</p>
          <p className="product-details-price">
            ${item.productPrice} X {item.productQuantity}{" "}
            <span>
              ${Number(item.productPrice) * Number(item.productQuantity)}
            </span>
          </p>
        </div>
      </div>
      <ButtonWithIcon
        className="delete-product"
        variant="secondary"
        onClick={(event) => {
          event.preventDefault();
          deleteItemInCart(id);
        }}
      >
        {<i className="fa-solid fa-trash"></i>}
      </ButtonWithIcon>
    </div>
  );
};

export default CartItem
