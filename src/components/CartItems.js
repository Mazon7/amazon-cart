import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

function CartItems({ items }) {
  console.log("Inside CartItems component", items);

  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      {items.map((item, index) => (
        <CartItem
          key={index}
          title={item.title}
          stock={item.stock}
          image={item.image}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
}

export default CartItems;
