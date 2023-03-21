import styled from "styled-components";

export const ItemCardContainer = styled.div`
  padding: 1rem;
  border: 4px solid #000;
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  align-items: center;
  border-radius: 11px;
`;

export const ItemCardImgContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

export const ItemCardTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ItemCardText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;
export const ItemCardDescription = styled.p`
  font-size: 0.8rem;
`;
export const ItemCardButton = styled.button`
  padding: 8px;
`;
