import React, { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import "./CartData.css";

function CartData() {
  const { cart, totalPrice } = useContext(ShopContext);
  const navigate = useNavigate();

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
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h3>Su carrito se encuentra vacío</h3>
      )}
    </>
  );
}

export default CartData;
