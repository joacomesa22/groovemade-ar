import React from "react";
import "./Hero.css";

function Hero({ text, bgImg }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),url(${bgImg})`,
      }}
    >
      <h2 className="hero__text">{text}</h2>
    </div>
  );
}

export default Hero;
