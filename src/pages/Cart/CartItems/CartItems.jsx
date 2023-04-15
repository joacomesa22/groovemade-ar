import React, { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import CartItem from "../CartItem/CartItem";
import CartData from "../CartData/CartData";
import "./CartItems.css";

function CartItems() {
  const { cart } = useContext(ShopContext);

  return (
    <div className="cartSection">
      <h1>Sus productos en el carrito</h1>
      <div className="cartCardsContainer">
        {cart.map((prod) => {
          return <CartItem data={prod} key={prod.id} />;
        })}
      </div>
      <CartData />
    </div>
  );
}

export default CartItems;
