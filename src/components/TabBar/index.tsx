import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline, IoSearchOutline, IoClipboardOutline } from 'react-icons/io5';

import { Text } from '../Text';

import { TabBarContainer } from './styles';


export function TabBar() {
  return (
    <>
      <TabBarContainer>
        <IoHomeOutline />
        <Text>
          <Link to='/'>Inicio</Link>
        </Text>
      </TabBarContainer>

      <TabBarContainer>
        <IoSearchOutline />
        <Text>
          <Link to='/search'>Buscar</Link>
        </Text>
      </TabBarContainer>

      <TabBarContainer>
        <IoClipboardOutline />
        <Text>
          <Link to='/order'>Pedidos</Link>
        </Text>
      </TabBarContainer>
    </>
  );
}
