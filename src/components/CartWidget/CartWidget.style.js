import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

export const CartIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  transition: all 0.3s;
  color: #00aae4;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CartCounter = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
`;
