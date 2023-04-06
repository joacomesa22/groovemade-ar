import React, { useContext } from "react";
import "./ItemCount.css";
import { ShopContext } from "../../../context/ShopContext";

function ItemCount(props) {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const { id, stock } = props.data;

  return (
    <div className="itemCount">
      <button
        onClick={() => {
          if (cartItems[id] < stock) {
            addToCart(id);
          }
        }}
        className="itemCount__btn"
      >
        +
      </button>
      <input value={cartItems[id]} readOnly className="itemCount__counter" />
      <button
        onClick={() => {
          removeFromCart(id);
        }}
        className="itemCount__btn"
      >
        -
      </button>
    </div>
  );
}

export default ItemCount;
