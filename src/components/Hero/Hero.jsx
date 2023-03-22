import React from "react";
import "./Hero.css";

function Hero({ text, bgImg }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
        ),url(${bgImg})`,
      }}
    >
      <h2 className="hero__text">{text}</h2>
    </div>
  );
}

export default Hero;
