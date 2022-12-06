import React from 'react';
import { Text } from '../Text';

import { CategoryContainer, TextContainer } from './styles';

export function Categories() {
  return(
    <CategoryContainer>
      <TextContainer>
        <Text>Lanches</Text>
      </TextContainer>
      <TextContainer>
        <Text>Espetinhos</Text>
      </TextContainer>
      <TextContainer>
        <Text>Bebidas</Text>
      </TextContainer>
      <TextContainer>
        <Text>Molhos</Text>
      </TextContainer>
    </CategoryContainer>
  );
}
