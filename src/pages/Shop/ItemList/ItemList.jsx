import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
function ItemList({ products }) {
  return (
    <div className="itemsContainer">
      {products.map((prod) => {
        return <Item data={prod} key={prod.id} />;
      })}
    </div>
  );
}

export default ItemList;
