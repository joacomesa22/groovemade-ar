import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { Link } from "react-router-dom";
import "./ItemListContainer.css";
import Hero from "../../../components/Hero/Hero";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, "products");
    if (category) {
      const queryFilter = query(
        queryCollection,
        where("productCategory", "==", category)
      );
      getDocs(queryFilter).then((res) =>
        setProducts(
          res.docs.map((prod) => ({
            id: prod.id,
            ...prod.data(),
          }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setProducts(
          res.docs.map((prod) => ({
            id: prod.id,
            ...prod.data(),
          }))
        )
      );
    }
  }, [category]);

  return (
    <>
      <Hero text="Accesorios que inspiran" bgImg="/img/heroImgs/deskImg2.jpg" />
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
          <Link className="itemSectionCategories__link" to={"/shop/stands"}>
            Stands
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
