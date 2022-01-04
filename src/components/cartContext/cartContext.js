import React from "react";
import { useState } from "react";

export const CartContext = React.createContext([]);

const CartContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product, quantity) => {
    let productFound = false;
    const newCart = products.map((productInCart) => {
      if (productInCart.id === product.id) {
        productInCart.quantity = productInCart.quantity + quantity;
        productInCart.subtotal = productInCart.quantity * productInCart.price;
        productFound = true;
      }
      return productInCart;
    });
    setProducts(
      !productFound
        ? [
            ...products,
            { ...product, quantity, subtotal: product.price * quantity },
          ]
        : newCart
    );
  };

  const productsCount = () => {
    return products.reduce((acc, p) => (acc += p.quantity), 0);
  };

  // Eliminar producto del carrito
  const removeItem = (id) => {
    products.splice(
      products.findIndex((producto) => producto.id === id),
      1
    );
    setProducts([...products]);
  };

  // Eliminar todos los productos del carrito
  const cleanCart = () => {
    setProducts([]);
  };

  // Importe total
  const getTotal = () => {
    return products.reduce((acc, p) => (acc += p.price * p.quantity), 0);
  };

  return (
    <CartContext.Provider
      value={[
        products,
        productsCount,
        addProduct,
        cleanCart,
        removeItem,
        getTotal,
      ]}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
