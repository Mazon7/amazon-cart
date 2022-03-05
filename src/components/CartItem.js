import React from "react";
import "./CartItem.css";

function Cartitem() {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_SG?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1632948873000"
          alt="laptop"
        />
      </div>
      <div className="CartItem-info">
        <div className="info-title">
          <h2>Title</h2>
        </div>
        <div className="info-stock"></div>
        <div className="item-actions">
          <div className="item-quantity">
            <select name="cars" id="cars">
              <option value="1"></option>
            </select>
          </div>
          <div className="item-delete">Delete</div>
        </div>
      </div>
      <div className="CartItem-price">$1000</div>
    </div>
  );
}

export default Cartitem;
