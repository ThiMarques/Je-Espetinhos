import React, { createContext, useState } from 'react';
import { CartItemInterface } from '../types/CartItem';
import { ProductInterface } from '../types/Product';

export const ProductContext = createContext({});

export function ProductProvider({ children }) {
  const [cartItems, setCartItems] = useState<CartItemInterface[]>([]);

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  function handleAddToCart(product: ProductInterface) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product.id === product.id
      );

      if(itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleDecrementCartItem(product: ProductInterface) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product.id === product.id
      );

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  return (
    <ProductContext.Provider value={{ handleAddToCart, cartItems, setCartItems, total, handleDecrementCartItem }}>
      {children}
    </ProductContext.Provider>
  );
}
