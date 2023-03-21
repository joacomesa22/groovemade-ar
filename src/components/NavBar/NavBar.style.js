import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 0.9rem;
  transition: all 0.2s;
  text-transform: uppercase;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    color: #00aae4;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #000;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.4);
  background-color: #000;

  @media screen and (max-width: 768px) {
    /* Luego hacer menu hamburguesa */
    flex-direction: column;
  }
`;

export const NavbarLogoContainer = styled.div`
  max-width: 200px;
`;

export const NavbarLogo = styled.img`
  width: 100%;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const NavBarLinksContainer = styled.nav`
  display: flex;
  gap: 2rem;
`;

// export const NavBarLink = styled.a`
//   text-decoration: none;
//   color: #fff;
//   font-size: 0.9rem;
//   transition: all 0.3s;
//   text-transform: uppercase;
//   font-weight: 800;
//   cursor: pointer;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;
