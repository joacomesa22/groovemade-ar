import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../../products";
import Item from "../Item/Item";
import { ItemsContainer } from "./ItemListContainer.style";
import { Link } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  return (
    <>
      <div>
        <button>Todos</button>
        <button>Ropa</button>
        <button>Tecnología</button>
      </div>
      <ItemsContainer>
        {products.map((prod) => {
          return <Item data={prod} key={prod.id} />;
        })}
      </ItemsContainer>
    </>
  );
}

export default ItemListContainer;
