import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

function CartItems({ items, setCartItems }) {
  const changeItemQuantity = (e, index) => {
    console.log(e.target.value);
    console.log("Index is", index);
    const newItems = [...items];
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  };

  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      {items.map((item, index) => (
        <CartItem
          index={index}
          title={item.title}
          stock={item.stock}
          image={item.image}
          price={item.price}
          quantity={item.quantity}
          changeItemQuantity={changeItemQuantity}
        />
      ))}
    </div>
  );
}

export default CartItems;
