import React, { useContext, useRef } from "react";
import { ShopContext } from "../../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  addDoc,
  collection,
  getDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import "./Checkout.css";

function Checkout() {
  const { totalPrice, emptyCart } = useContext(ShopContext);
  const datosFormulario = useRef();
  let navigate = useNavigate();
  const db = getFirestore();

  const createOrder = async (client, total, date) => {
    const ordenCompra = await addDoc(collection(db, "orders"), {
      clientName: client.nombre,
      clientEmail: client.email,
      clientPhone: client.celular,
      clientDirection: client.direccion,
      date: date,
      total: total,
    });

    return ordenCompra;
  };

  const getOrder = async (id) => {
    const order = await getDoc(doc(db, "orders", id));
    const orderData = { id: order.id, ...order.data() };
    return orderData;
  };

  const validateEmail = () => {
    const emailLabel1 = document.querySelector("#emailLabel1");
    const emailLabel2 = document.querySelector("#emailLabel2");
    const emailInput1 = document.querySelector("#emailInput1");
    const emailInput2 = document.querySelector("#emailInput2");
    if (emailInput1.value === emailInput2.value) {
      emailLabel1.classList.remove("error-text");
      emailLabel2.classList.remove("error-text");
      return true;
    } else {
      emailLabel1.classList.add("error-text");
      emailLabel2.classList.add("error-text");
      return false;
    }
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    const checkEmails = validateEmail();
    if (checkEmails) {
      const dataForm = new FormData(datosFormulario.current);
      const client = Object.fromEntries(dataForm);
      createOrder(client, totalPrice, new Date().toJSON().slice(0, 10))
        .then((res) => {
          getOrder(res.id).then((data) => {
            console.log(data);
            toast.success(
              `Gracias por su compra! Su numero de orden es ${data.id}`
            );
            emptyCart();
            e.target.reset();
            navigate("/");
          });
        })
        .catch((err) => {
          toast.error("Error al finalizar compra");
          console.log(err);
        });
    } else {
      console.log("Error en los emails");
    }
  };

  return (
    <section className="checkout">
      <div className="checkout__form-container">
        <h1>Ingrese sus datos</h1>
        <form onSubmit={finalizarCompra} ref={datosFormulario} className="form">
          <div className="form__field">
            <label htmlFor="nombre">Nombre Completo</label>
            <input type="text" name="nombre" required />
          </div>
          <div className="form__field">
            <label htmlFor="email" id="emailLabel1">
              Email
            </label>
            <input type="email" name="email" id="emailInput1" required />
          </div>
          <div className="form__field">
            <label htmlFor="email2" id="emailLabel2">
              Repetir Email
            </label>
            <input type="email" name="email2" id="emailInput2" required />
          </div>
          <div className="form__field">
            <label htmlFor="celular">Teléfono</label>
            <input type="text" name="celular" required />
          </div>
          <div className="form__field">
            <label htmlFor="direccion">Dirección</label>
            <input type="text" name="direccion" required />
          </div>
          <button type="submit" className="btn form__submit">
            Finalizar Compra
          </button>
        </form>
      </div>
    </section>
  );
}

export default Checkout;
