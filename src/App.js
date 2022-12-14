import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

const [cartShown, setCartShown] = useState('');

const showCartHandler= props =>{
  setCartShown(true);
}

const hideCartHandler= props =>{
  setCartShown(false);
}

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
<main>
<Meals />
  </main>    
  </CartProvider>
  );
}

export default App;
