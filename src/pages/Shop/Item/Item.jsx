import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";

function Item(props) {
  const { id, productName, productImage, price } = props.data;
  const navigate = useNavigate();

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
    </div>
  );
}

export default Item;
