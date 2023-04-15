import React, { useContext } from "react";
import "./ItemCount.css";
import { ShopContext } from "../../../context/ShopContext";

function ItemCount(props) {
  const { addToCart, removeFromCart } = useContext(ShopContext);
  const { quantity } = props.data;

  return (
    <div className="itemCount">
      <button
        onClick={() => {
          addToCart(props.data);
        }}
        className="itemCount__btn"
      >
        +
      </button>
      <input value={quantity} readOnly className="itemCount__counter" />
      <button
        onClick={() => {
          removeFromCart(props.data);
        }}
        className="itemCount__btn"
      >
        -
      </button>
    </div>
  );
}

export default ItemCount;
