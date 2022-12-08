import React from 'react';

import { Text } from '../Text';
import Logo from '../../assets/jeEspetinhos.jpg';

import { Container, HeaderText, Image } from './styles';

export function Header() {
  return (
    <Container>
      <Image src={Logo} alt='Logo Je Espetihnos'/>
      <HeaderText>
        <Text size={24} weight="700" style={{ marginRight: 4 }}>
          JE ESPETINHOS
        </Text>
        <Text><small>Desde 2013</small></Text>
      </HeaderText>
    </Container>
  );
}
