import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContext";
import { RiArrowGoBackFill } from "react-icons/ri";
import "./itemDetail.css";

function ItemDetail(props) {
  const { cart, addToCart } = useContext(ShopContext);
  const { id, productName, productImage, productDescription, price, stock } =
    props.data;

  const getQuantity = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityInCart = getQuantity(id);

  const navigate = useNavigate();
  return (
    <div className="itemDetailCard">
      <div className="itemDetailCard__img">
        <img src={productImage} alt={productName} />
      </div>
      <div className="itemDetailCard__right">
        <div className="itemDetailCard__right--text">
          <h2 className="itemDetailCard__right--text--name">{productName}</h2>
          <p className="itemDetailCard__right--text--description">
            {productDescription}
          </p>
          <h3 className="itemDetailCard__right--text--price">${price}</h3>
        </div>
        <button
          className="btn bgBlack"
          onClick={() => {
            addToCart(props.data);
          }}
        >
          Agregar al Carrito{" "}
          {quantityInCart > 0 && <span>({quantityInCart})</span>}
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
