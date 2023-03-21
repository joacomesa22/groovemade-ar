import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContainer, CartIcon, CartCounter } from "./CartWidget.style";

export default function CartWidget() {
  return (
    <CartContainer>
      <CartIcon icon={faShoppingCart} />
      <CartCounter>5</CartCounter>
    </CartContainer>
  );
}
