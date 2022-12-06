import React from 'react';
import { Product } from '../../types/Product';
import { Product1 } from '../../mocks/product';
import { Text } from '../Text';

import { ProductContainer, ProductDetails, ProductCategory } from './styles';

interface MenuBoardProps {
  name: string;
  products: Product1[];
}

export function MenuBoard({ name, products }: MenuBoardProps) {
  console.log(products);

  return (
    <ProductContainer>
      <ProductCategory>
        <Text weight='700'>{name}</Text>
      </ProductCategory>

      <ProductDetails>
        <Text>Espetinho de Carne</Text>
        {/* <Text>{Product1.name}</Text> */}
      </ProductDetails>
    </ProductContainer>
  );
}
