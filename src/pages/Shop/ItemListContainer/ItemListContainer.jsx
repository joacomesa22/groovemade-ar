import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../../products";
import ItemList from "../ItemList/ItemList";
import { Link } from "react-router-dom";
import "./ItemListContainer.css";
import Hero from "../../../components/Hero/Hero";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const prom = new Promise((resolve) => {
      // setTimeout(() => {
      resolve(
        category
          ? PRODUCTS.filter((prod) => prod.productCategory === category)
          : PRODUCTS
      );
      // }, 2000);
    });
    prom.then((data) => {
      setProducts(data);
    });
  }, [category]);

  return (
    <>
      <Hero text="Accesorios que inspiran" bgImg="./heroImgs/deskImg2.jpg" />
      <section className="itemsSection">
        <div className="itemSectionCategories">
          <Link className="itemSectionCategories__link" to={"/shop"}>
            Todos los productos
          </Link>
          <Link
            className="itemSectionCategories__link"
            to={"/shop/laptopsMonitores"}
          >
            Laptops y Monitores
          </Link>
          <Link
            className="itemSectionCategories__link"
            to={"/shop/mouseTeclados"}
          >
            Mouse y Teclado
          </Link>
          <Link className="itemSectionCategories__link" to={"/shop/otros"}>
            Otros
          </Link>
        </div>
        <ItemList products={products} />
      </section>
    </>
  );
}

export default ItemListContainer;
