import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./CartItem.css";

function CartItem(props) {
  const { id, productName, productImage, price } = props.data;
  return (
    <div className="cartItemCard">
      <div className="cartItemCard__img">
        <img src={productImage} alt={productName} />
      </div>
      <div className="cartItemCard__text">
        <h2>{productName}</h2>
        <h2>${price}</h2>
      </div>
      <ItemCount data={props.data} />
    </div>
  );
}

export default CartItem;
