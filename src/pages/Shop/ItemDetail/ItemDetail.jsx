import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContext";
import { RiArrowGoBackFill } from "react-icons/ri";
import "./itemDetail.css";

function ItemDetail({ prods }) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[prods.id];
  const navigate = useNavigate();
  return (
    <div className="itemDetailCard">
      <div className="itemDetailCard__img">
        <img src={prods.productImage} alt={prods.productName} />
      </div>
      <div className="itemDetailCard__right">
        <div className="itemDetailCard__right--text">
          <h2 className="itemDetailCard__right--text--name">
            {prods.productName}
          </h2>
          <p className="itemDetailCard__right--text--description">
            {prods.productDescription}
          </p>
          <h3 className="itemDetailCard__right--text--price">${prods.price}</h3>
        </div>
        <button
          className="btn bgBlack"
          onClick={() => {
            addToCart(prods.id);
          }}
        >
          Agregar al Carrito {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
        <button
          className="btnAlt"
          onClick={() => {
            navigate("/shop");
          }}
        >
          <RiArrowGoBackFill className="backIconFs" />
          Regresar
        </button>
      </div>
    </div>
  );
}

export default ItemDetail;
