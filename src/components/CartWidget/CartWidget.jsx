import React, { useContext } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CartWidget.css";

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
    <div className="cartWidget">
      <FontAwesomeIcon icon={faShoppingCart} className="cartWidget__icon" />
      <span className="cartWidget__counter">{totalItems()}</span>
    </div>
  );
}
