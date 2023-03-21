import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemCardContainer = styled.div`
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
    border-radius: 12px;

    :hover {
      filter: opacity(0.8);
    }
  }
`;

export const ItemCardTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 4px;
  transition: all 0.3s;

  :hover {
    background-color: #000;
    color: #fff;
  }
`;
