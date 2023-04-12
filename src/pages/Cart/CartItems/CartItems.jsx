import React, { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import "./CartItems.css";

function CartItems() {
  const { cart } = useContext(ShopContext);

  return (
    <div className="cartSection">
      <div>
        <h1>Sus productos en el carrito</h1>
      </div>
      <div className="cartCardsContainer">
        {cart.map((prod) => {
          return <CartItem data={prod} key={prod.id} />;
        })}
      </div>
      <Checkout />
    </div>
  );
}

export default CartItems;
