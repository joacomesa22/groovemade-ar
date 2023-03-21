import React, { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";
import { PRODUCTS } from "../../../products";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";

function CartItems() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div>
      <div>
        <h1>Sus productos en el carrito</h1>
      </div>
      <div>
        {PRODUCTS.map((prod) => {
          if (cartItems[prod.id] !== 0) {
            return <CartItem data={prod} key={prod.id} />;
          }
        })}
      </div>
      <Checkout />
    </div>
  );
}

export default CartItems;
