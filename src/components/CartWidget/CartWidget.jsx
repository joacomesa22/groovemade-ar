import React, { useContext } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContainer, CartIcon, CartCounter } from "./CartWidget.style";
import { ShopContext } from "../../context/ShopContext";

export default function CartWidget() {
  const { cartItems } = useContext(ShopContext);

  const totalItems = () => {
    let total = 0;
    for (const item in cartItems) {
      total += cartItems[item];
    }
    return total;
  };

  return (
    <CartContainer>
      <CartIcon icon={faShoppingCart} />
      <CartCounter>{totalItems()}</CartCounter>
    </CartContainer>
  );
}
