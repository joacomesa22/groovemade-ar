import React, { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const { cart } = useContext(ShopContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  return (
    <>
      {cart.length > 0 ? (
        <div className="checkOutSection">
          <p className="checkOutSubtotal">Subtotal: ${totalPrice}</p>
          <button
            className="btnAlt"
            onClick={() => {
              navigate("/shop");
            }}
          >
            Continuar comprando
          </button>
          <button
            className="btn"
            onClick={() => {
              console.log(cart);
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h3>Su carrito esta vacío</h3>
      )}
    </>
  );
}

export default Checkout;
