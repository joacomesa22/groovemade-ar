import React, { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const { getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <>
      {totalAmount > 0 ? (
        <div className="checkOutSection">
          <p className="checkOutSubtotal">Subtotal: ${totalAmount}</p>
          <button
            className="btnAlt"
            onClick={() => {
              navigate("/shop");
            }}
          >
            Continuar comprando
          </button>
          <button className="btn">Checkout</button>
        </div>
      ) : (
        <h3>Su carrito esta vacío</h3>
      )}
    </>
  );
}

export default Checkout;
