import React from "react";
import {
  CartItemCard,
  CartItemCardImg,
  CartItemCardText,
} from "./CartItem.style";
import ItemCount from "../ItemCount/ItemCount";

function CartItem(props) {
  const { id, productName, productImage, price } = props.data;
  return (
    <CartItemCard>
      <CartItemCardImg>
        <img src={productImage} alt={productName} />
      </CartItemCardImg>
      <CartItemCardText>
        <h2>{productName}</h2>
        <h2>${price}</h2>
      </CartItemCardText>
      <ItemCount data={props.data} />
    </CartItemCard>
  );
}

export default CartItem;
