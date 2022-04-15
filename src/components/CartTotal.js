import React from "react";
import "./CartTotal.css";

function CartTotal({ items }) {
  const getTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    // need to fix
    return total;
  };

  return (
    <div className="CartTotal">
      <h3>
        Subtotal({items.length}):
        <span className="CartTotal-price">${getTotalPrice().toFixed(2)}</span>
      </h3>
      <button>Procees to checkout</button>
    </div>
  );
}

export default CartTotal;
