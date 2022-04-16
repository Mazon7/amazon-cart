import React from "react";
import "./CartTotal.css";
import NumberFormat from "react-number-format";

function CartTotal({ items, setCartItems }) {
  const getTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const getSubTotal = () => {
    let totalQuantity = 0;
    items.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  return (
    <div className="CartTotal">
      <h3>
        Subtotal({getSubTotal()}):
        <span className="CartTotal-price">
          <NumberFormat
            value={getTotalPrice()}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
          />
        </span>
      </h3>
      <button>Procees to checkout</button>
    </div>
  );
}

export default CartTotal;
