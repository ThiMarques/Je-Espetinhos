import React, { useContext } from 'react';
import { AddressContext } from '../../contexts/addressContext';
import { Details } from '../Details';

import { Information } from '../Information';
import { Text } from '../Text';

import {
  OrderCategoryContainer,
  InformationContainer,
  DetailsContainer
} from './styles';

export function OrderCategory({order}) {
  const { address } = useContext(AddressContext);

  return (
    <>
      <OrderCategoryContainer>

        <Text>Pedido N° 01</Text>
        <Text>{address}</Text>
        <Text><small>Em 02/12/2022 as 21:02</small></Text>

        <InformationContainer>
          <Information />
        </InformationContainer>

        <Text>R$ 23,00</Text>

        <DetailsContainer>
          <Details/>
        </DetailsContainer>

      </OrderCategoryContainer>
    </>
  );
}
