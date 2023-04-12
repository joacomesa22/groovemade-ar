import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { ShopContext } from "../../context/ShopContext";
import "./CartWidget.css";

export default function CartWidget() {
  const navigate = useNavigate();
  const { cart } = useContext(ShopContext);

  const totalInCart = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <div
      className="cartWidget"
      onClick={() => {
        navigate("/cart");
      }}
    >
      <BsHandbag className="cartWidget__icon" />
      <span className="cartWidget__counter">{totalInCart}</span>
    </div>
  );
}
