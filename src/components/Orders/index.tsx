import React from 'react';
import { orderList } from '../../mocks/order';
import { GlobalStyles } from '../../styles/GlobalStyles';

import { Header } from '../Header';
import { OrderCategory } from '../OrderCategory';
import { TabBar } from '../TabBar';
import { Text } from '../Text';

import { Container, OrderContainer, Footer, TabBarContainer } from './styles';

export function Orders() {

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />

        <OrderContainer>
          <Text className='text'>Meus pedidos</Text>

          {orderList.map((order) => {
            return <OrderCategory key={order.nPedido} order={order}/>;
          })}
        </OrderContainer>
      </Container>

      <Footer>
        <TabBarContainer>
          <TabBar />
        </TabBarContainer>
      </Footer>
    </>
  );
}
