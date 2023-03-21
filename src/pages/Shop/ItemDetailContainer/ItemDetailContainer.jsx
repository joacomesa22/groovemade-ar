import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../../products";
import {
  DetailContainer,
  DetailContainerBtn,
} from "./ItemDetailContainer.style";

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
    <DetailContainer>
      <DetailContainerBtn
        onClick={() => {
          navigate("/shop");
        }}
      >
        Regresar
      </DetailContainerBtn>
      <ItemDetail prods={products} />
    </DetailContainer>
  );
}

export default ItemDetailContainer;
