import React, { createContext, useState } from 'react';
import { productList } from '../mocks/product';
import { CartItemInterface } from '../types/CartItem';

export const ProductContext = createContext({});

export function ProductProvider({ children }) {
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState<CartItemInterface[]>([
    {
      quantity: 4,
      product: productList[2],
    },
    {
      quantity: 5,
      product: productList[3],
    },
    // {
    //   quantity: 5,
    //   product: productList[4],
    // },
  ]);

  function addProductToCart() {}

  return (
    <ProductContext.Provider value={{ count, setCount, addProductToCart, cartItems, setCartItems }}>
      {children}
    </ProductContext.Provider>
  );
}
