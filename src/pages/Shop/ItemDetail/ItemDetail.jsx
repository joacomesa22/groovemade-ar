import React, { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import "./itemDetail.css";

function ItemDetail({ prods }) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[prods.id];
  return (
    <div className="itemDetailCard">
      <div className="itemDetailCard__img">
        <img src={prods.productImage} alt={prods.productName} />
      </div>
      <div className="itemDetailCard__text">
        <h2>{prods.productName}</h2>
        <h3>${prods.price}</h3>
      </div>
      <button
        className="itemDetailCard__btn"
        onClick={() => {
          addToCart(prods.id);
        }}
      >
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
}

export default ItemDetail;
