import React from 'react';
import { Text } from '../Text';

import { InformationContainer } from './styles';

export function Information() {
  return (
    <>
      <InformationContainer>
        <div>
          <Text className='quantity'>1 x</Text>
          <Text>Lanche</Text>
        </div>
        <div>
          <Text className='quantity'>1 x</Text>
          <Text>Espetinho</Text>
        </div>
      </InformationContainer>
    </>
  );
}
