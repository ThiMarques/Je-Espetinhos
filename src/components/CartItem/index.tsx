import React from 'react';

// import { IoIosCart } from 'react-icons/io';
import { CartItemInterface } from '../../types/CartItem';
import { Text } from '../Text';
// import { Text } from '../Text';

import {
  Item,
  ProductContainer,
  Actions,
  Image,
  QuantityContainer,
} from './styles';

interface CartItemProps {
  cartItems: CartItemInterface;
}

export function CartItem({ cartItems }: CartItemProps) {
  return (
    <Item>
      <ProductContainer>
        <Image />

        <QuantityContainer>
          <Text size={14} color='#666'>
            Total
          </Text>
        </QuantityContainer>
      </ProductContainer>

      <Actions></Actions>
    </Item>
  );
}
