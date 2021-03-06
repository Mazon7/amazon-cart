import React from "react";
import items from "../Data";
import "./CartItem.css";

function Cartitem({
  index,
  title,
  stock,
  image,
  price,
  quantity,
  changeItemQuantity,
  deleteItem,
}) {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img src={process.env.PUBLIC_URL + "/items/" + image} alt="laptop" />
      </div>
      <div className="CartItem-info">
        <div className="info-title">
          <h2>{title}</h2>
        </div>
        <div className="info-stock">{stock}</div>
        <div className="item-actions">
          <div className="item-quantity">
            <select
              value={quantity}
              onChange={(e) => changeItemQuantity(e, index)}
            >
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
            </select>
          </div>
          <div className="item-actions-divider">|</div>
          <div className="item-delete" onClick={deleteItem.bind(this, index)}>
            Delete
          </div>
        </div>
      </div>
      <div className="CartItem-price">${price}</div>
    </div>
  );
}

export default Cartitem;
