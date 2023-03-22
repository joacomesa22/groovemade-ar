import React, { useContext } from "react";
import "./ItemCount.css";
import { ShopContext } from "../../../context/ShopContext";

function ItemCount(props) {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const { id } = props.data;

  return (
    <div className="itemCount">
      <button
        onClick={() => {
          addToCart(id);
        }}
        className="itemCount__btn"
      >
        +
      </button>
      <input
        value={cartItems[id]}
        onChange={(e) => {
          updateCartItemCount(Number(e.target.value), id);
        }}
        className="itemCount__counter"
      />
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
