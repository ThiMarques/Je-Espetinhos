import React from 'react';
import { Text } from '../Text';
import { ProductContainer } from './styles';

function Product({product}) {
  return (
    <ProductContainer>
      <div className='image'/>

      <div className='text-content'>
        <Text>Espetinho</Text>
        <Text><small>R$ 10,00</small></Text>
      </div>
    </ProductContainer>
  );
}

export default Product;
