import styled from "styled-components";

export const CartItemCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  border: 4px solid #000;
  max-width: 700px;
  margin-bottom: 2rem;
`;

export const CartItemCardImg = styled.div`
  max-width: 200px;
  img {
    width: 100%;
  }
`;

export const CartItemCardText = styled.div`
  display: flex;
  flex-direction: column;
`;
