import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { PRODUCTS } from "../../../products";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

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
      <ItemDetail prods={products} />
    </section>
  );
}

export default ItemDetailContainer;
