import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "../css/CartWidget-module.css";

export default function CartWidget() {
  return (
    <div className="header__cart">
      <FontAwesomeIcon className="header__cart--icon" icon={faShoppingCart} />
      <p className="header__cart--counter">5</p>
    </div>
  );
}
