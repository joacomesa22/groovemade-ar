import React from "react";
import { ItemsContainer } from "./ItemList.style";
import Item from "../Item/Item";
function ItemList({ products }) {
  return (
    <div>
      <div></div>
      <ItemsContainer>
        {products.map((prod) => {
          return <Item data={prod} key={prod.id} />;
        })}
      </ItemsContainer>
    </div>
  );
}

export default ItemList;
