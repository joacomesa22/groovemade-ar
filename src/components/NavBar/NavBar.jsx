import React from "react";
import logoFull2 from "../../assets/logoFull2.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__logoContainer">
        <img
          src={logoFull2}
          onClick={() => {
            navigate("/");
          }}
          alt="logo"
        />
      </div>
      <nav className="headerLinks">
        <Link to="/shop" className="headerLinks__link">
          Shop
        </Link>
        <Link to="/about" className="headerLinks__link">
          About
        </Link>
        <Link to="/contact" className="headerLinks__link">
          Contact
        </Link>
      </nav>

      <CartWidget />
    </header>
  );
}
