import React from "react";
import logoFull from "../assets/img/logoFull.png";
import styles from "../css/NavBar-module.css";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <a href="../../public/index.html">
          <img src={logoFull} alt="logo" />
        </a>
      </div>
      <nav className="navbar__links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <CartWidget />
    </header>
  );
}
