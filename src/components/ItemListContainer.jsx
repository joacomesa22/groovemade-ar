import React from "react";
import styles from "../css/ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  return (
    <>
      <section className="items-container">
        <h1>{greeting}</h1>
      </section>
    </>
  );
}
