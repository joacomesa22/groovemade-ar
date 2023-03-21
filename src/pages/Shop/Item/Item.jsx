import React, { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import {
  ItemCardContainer,
  ItemCardImgContainer,
  ItemCardTextContainer,
  ItemCardText,
  ItemCardButton,
} from "./Item.style";

function Item(props) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { id, productName, productImage, price } = props.data;

  const cartItemAmount = cartItems[id];
  return (
    <ItemCardContainer>
      <ItemCardImgContainer>
        <img src={productImage} alt={productName} />
      </ItemCardImgContainer>

      <ItemCardTextContainer>
        <a href="">Ver Producto</a>
        <ItemCardText>{productName}</ItemCardText>
        <ItemCardText>{price}</ItemCardText>
      </ItemCardTextContainer>

      <ItemCardButton
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </ItemCardButton>
    </ItemCardContainer>
  );
}

export default Item;
