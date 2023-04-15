import React, { createContext, useState } from "react";
export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (prod) => {
    setCart((currItems) => {
      const isInCart = currItems.find((item) => item.id === prod.id);
      if (isInCart) {
        return currItems.map((item) => {
          if (item.id === prod.id && item.quantity < prod.stock) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...currItems,
          {
            id: prod.id,
            productName: prod.productName,
            productImage: prod.productImage,
            productDescription: prod.Description,
            price: prod.price,
            stock: prod.stock,
            quantity: 1,
          },
        ];
      }
    });
  };

  const removeFromCart = (prod) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === prod.id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== prod.id);
      } else {
        return currItems.map((item) => {
          if (item.id === prod.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const emptyCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  const contextValue = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    emptyCart,
    totalPrice,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
