import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./CartItem.css";

function CartItem(props) {
  const { productName, productImage, price, stock } = props.data;
  return (
    <div className="cartItemCard">
      <div className="cartItemCard__img">
        <img src={productImage} alt={productName} />
      </div>
      <div className="cartItemCard__text">
        <h3>{productName}</h3>
        <h3>${price}</h3>
        <p>Stock disponible: {stock}</p>
      </div>
      <ItemCount data={props.data} />
    </div>
  );
}

export default CartItem;
