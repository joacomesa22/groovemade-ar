import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { ShopContext } from "../../context/ShopContext";
import "./CartWidget.css";

export default function CartWidget() {
  const { cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const totalItems = () => {
    let total = 0;
    for (const item in cartItems) {
      total += cartItems[item];
    }
    return total;
  };

  return (
    <div
      className="cartWidget"
      onClick={() => {
        navigate("/cart");
      }}
    >
      <BsHandbag className="cartWidget__icon" />
      <span className="cartWidget__counter">{totalItems()}</span>
    </div>
  );
}
