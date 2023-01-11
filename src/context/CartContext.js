import { createContext, useEffect, useState } from "react";
import React from "react";

const CartContext = createContext({});
const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const handleDeleteItem = (id) => {
    // let items = cartItems.filter((item) => {
    //   return item.productId !== id;
    // });
    // setCartItems(items);
    console.log("delete item");
  };
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, handleDeleteItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
export { CartContextProvider, CartContext };
