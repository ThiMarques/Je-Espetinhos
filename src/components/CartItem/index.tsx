import React from 'react';

import { IoIosCart } from 'react-icons/io';

import { Text } from '../Text';

export function CartItem() {
  return (
    <>
      <IoIosCart style={{ color: 'white' }}/>
      <Text style={{ color: 'white' }}>Cart Item</Text>
      <Text style={{ color: 'white' }}>R$ 23,00</Text>
    </>
  );
}
