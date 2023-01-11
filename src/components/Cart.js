import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import ButtonWithIcon from "./common/ButtonWithIcon";

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const itemLength = cartItems.length;
  const deleteItem = (id) => {
    console.log(cartItems)
  
    let items = cartItems.filter((item,index) => {
      return index !== id;
    });
    setCartItems(items);
  };
  return (
    <div className="cart">
      <div className="cart-header">Cart</div>
      {itemLength > 0 &&
        cartItems.map((item, index) => {
          return (
            <CartItem
              item={item}
              id={index}
              key={index}
              deleteItemInCart={deleteItem}
            ></CartItem>
          );
        })}
      {!cartItems.length && <div class="msg-empty">Your cart is empty.</div>}
      {itemLength > 0 && (
        <ButtonWithIcon className="check-out-btn" variant="secondary">
          Check Out
        </ButtonWithIcon>
      )}
    </div>
  );
}

export default Cart;
