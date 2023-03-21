import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../../products";
import ItemList from "../ItemList/ItemList";
import { Link } from "react-router-dom";
import {
  ItemsSection,
  CategoryLinksContainer,
  CategoryLink,
} from "./ItemListContainer.style";

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
    <ItemsSection>
      <CategoryLinksContainer>
        <CategoryLink to={"/shop"}>Todos los productos</CategoryLink>
        <CategoryLink to={"/shop/tecnologia"}>Tecnologia</CategoryLink>
        <CategoryLink to={"/shop/ropa"}>Ropa</CategoryLink>
      </CategoryLinksContainer>
      <div>
        <ItemList products={products} />
      </div>
    </ItemsSection>
  );
}

export default ItemListContainer;
