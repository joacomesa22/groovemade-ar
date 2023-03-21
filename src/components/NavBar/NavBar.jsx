import React from "react";
import logoFull from "../../assets/logoFull.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

import {
  HeaderContainer,
  NavbarLogoContainer,
  NavbarLogo,
  NavBarLinksContainer,
  NavBarLink,
} from "./NavBar.style";

export default function Navbar() {
  return (
    <HeaderContainer>
      <NavbarLogoContainer>
        <Link to="/">
          <NavbarLogo src={logoFull} />
        </Link>
      </NavbarLogoContainer>
      <NavBarLinksContainer>
        <NavBarLink to="/shop">Shop</NavBarLink>
        <NavBarLink to="/about">About</NavBarLink>
        <NavBarLink to="/contact">Contact</NavBarLink>
      </NavBarLinksContainer>
      <Link to="cart">
        <CartWidget />
      </Link>
    </HeaderContainer>
  );
}
