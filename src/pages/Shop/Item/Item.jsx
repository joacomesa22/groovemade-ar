import React, { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import {
  ItemCardContainer,
  ItemCardImgContainer,
  ItemCardTextContainer,
  ItemCardText,
  ItemCardButton,
  StyledLink,
} from "./Item.style";
import { Link } from "react-router-dom";

function Item(props) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { id, productName, productImage, price } = props.data;

  const cartItemAmount = cartItems[id];
  return (
    <ItemCardContainer>
      <Link to={"/item/" + id}>
        <ItemCardImgContainer>
          <img src={productImage} alt={productName} />
        </ItemCardImgContainer>
      </Link>

      <ItemCardTextContainer>
        <StyledLink to={"/item/" + id}>
          <ItemCardText>{productName}</ItemCardText>
        </StyledLink>
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
