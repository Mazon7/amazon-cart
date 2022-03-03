import "./App.css";
import React from "react";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";

function App() {
  return (
    <div className="App">
      <Header title="Amazon cart" />
      <div className="App-main">
        <CartItems />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
