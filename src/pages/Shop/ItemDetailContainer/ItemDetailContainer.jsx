import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, "products", id);
    getDoc(queryDoc).then((res) => setProduct({ id: res.id, ...res.data() }));
  }, [id]);

  return (
    <section className="detailSection">
      <ItemDetail data={product} />
    </section>
  );
}

export default ItemDetailContainer;
