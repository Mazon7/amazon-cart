import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

function CartItems() {
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <CartItem />
    </div>
  );
}

export default CartItems;
