import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar ítem al carrito (con soporte para cantidad)
  const addToCart = (book, quantity = 1) => {
    if (quantity < 1) return; // Evitar cantidades inválidas
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === book.id);

      if (existingItem) {
        // Si el ítem ya existe, actualizamos su cantidad
        return prevCart.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      // Si no existe, lo agregamos con la cantidad inicial
      return [...prevCart, { ...book, quantity }];
    });
  };

  // Incrementar cantidad de un ítem específico
  const increaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Disminuir cantidad de un ítem específico, eliminándolo si llega a 0
  const decreaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0) // Elimina ítems con cantidad 0
    );
  };

  // Calcular el total del carrito considerando cantidades
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
}

