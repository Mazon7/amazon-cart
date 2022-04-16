import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

function CartItems({ items, setCartItems }) {
  const changeItemQuantity = (e, index) => {
    const newItems = [...items];
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  };

  const deleteItem = (indexToDelete) => {
    const newItems = items.filter((value, index) => {
      return index !== indexToDelete;
    });
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
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

export default CartItems;
