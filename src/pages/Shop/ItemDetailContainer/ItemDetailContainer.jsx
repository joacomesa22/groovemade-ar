import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../../products";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const prom = new Promise((resolve) => {
      //   setTimeout(() => {
      resolve(PRODUCTS.find((prod) => prod.id === parseInt(id)));
      //   }, 2000);
    });

    prom.then((data) => {
      setProducts(data);
    });
  }, [id]);

  return (
    <section className="detailSection">
      <button
        className="detailSection__btn"
        onClick={() => {
          navigate("/shop");
        }}
      >
        Regresar
      </button>
      <ItemDetail prods={products} />
    </section>
  );
}

export default ItemDetailContainer;
