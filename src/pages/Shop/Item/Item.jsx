import React, { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import "./Item.css";

function Item(props) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { id, productName, productImage, price } = props.data;
  const navigate = useNavigate();

  const cartItemAmount = cartItems[id];
  return (
    <div className="itemCard">
      <div className="itemCard__img">
        <img
          src={productImage}
          alt={productName}
          onClick={() => {
            navigate("/item/" + id);
          }}
        />
      </div>

      <div className="itemCard__text">
        <p
          className="itemCard__text--info"
          onClick={() => {
            navigate("/item/" + id);
          }}
        >
          {productName}
        </p>

        <p
          className="itemCard__text--info"
          onClick={() => {
            navigate("/item/" + id);
          }}
        >
          ${price}
        </p>
      </div>

      <button
        className="itemCard__btn"
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
}

export default Item;
