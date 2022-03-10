import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import data from "./Data";

function App() {
  const [cartItems, setCartItems] = useState(data);
  // console.log(cartItems);

  return (
    <div className="App">
      <Header title="Amazon cart" />
      <div className="App-main">
        <CartItems items={cartItems} />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
