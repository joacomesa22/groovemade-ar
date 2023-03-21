import React, { useContext } from "react";
import { ItemCountContainer } from "./ItemCount.style";
import { ShopContext } from "../../../context/ShopContext";

function ItemCount(props) {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const { id } = props.data;

  return (
    <ItemCountContainer>
      <button
        onClick={() => {
          addToCart(id);
        }}
      >
        +
      </button>
      <input
        value={cartItems[id]}
        onChange={(e) => {
          updateCartItemCount(Number(e.target.value), id);
        }}
      />
      <button
        onClick={() => {
          removeFromCart(id);
        }}
      >
        -
      </button>
    </ItemCountContainer>
  );
}

export default ItemCount;
