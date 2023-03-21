import React, { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <>
      {totalAmount > 0 ? (
        <div>
          <p>Subtotal: ${totalAmount}</p>
          <button
            onClick={() => {
              navigate("/shop");
            }}
          >
            Continuar comprando
          </button>
          <button>Checkout</button>
        </div>
      ) : (
        <h3>Su carrito esta vacío</h3>
      )}
    </>
  );
}

export default Checkout;
