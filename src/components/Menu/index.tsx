import React, { useState, useEffect } from 'react';
import { Product1 } from '../../mocks/product';
// import { Product } from '../../types/Product';
// import { Product } from '../../types/Product';
import { MenuBoard } from '../MenuBoard';

// import { Text } from '../Text';


// interface MenuProps {
//   products: Product1;
// }

export function Menu() {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    setProducts(Product1);
  }, []);


  return (
    <>
      <MenuBoard
        name="Lanche"
        products={products}
      />
      <MenuBoard
        name="Bebida"
        products={products}
      />
      <MenuBoard
        name="Espetinho"
        products={products}
      />
    </>
  );
}
