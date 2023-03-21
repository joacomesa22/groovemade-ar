import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const CategoryLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.4rem;
  padding: 4px;
  border: 2px solid #000;
  transition: all 0.3s;

  :hover {
    color: #fff;
    background-color: #000;
  }
`;
