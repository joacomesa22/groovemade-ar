import React from "react";
import Hero from "../../components/Hero/Hero";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <Hero
        text="Bienvenido a Grovemade Argentina"
        bgImg="/img/heroImgs/deskImg.jpeg"
      ></Hero>
      <section className="about">
        <div className="about__text">
          <h1>¿Qué es Grovemade?</h1>
          <p>
            Grovemade es una empresa estadounidense que se dedica al diseño y
            fabricación de productos artesanales de alta calidad para el hogar y
            la oficina. La empresa se enfoca en la fabricación de accesorios de
            escritorio, estuches de teléfonos móviles, fundas para portátiles,
            bandejas de almacenamiento, estantes de pared y otros productos de
            diseño elegante y funcional. Los productos se fabrican utilizando
            materiales de alta calidad, como madera, cuero y metal, y son
            conocidos por su artesanía excepcional y su notable atención al
            detalle.
          </p>
          <Link className="btn" to={"/shop"}>
            Ver Productos
          </Link>
        </div>
        <div className="about__img">
          <img src="./img/heroImgs/deskLaptop.jpg" alt="accesorios" />
        </div>
      </section>
    </>
  );
}

export default Home;
