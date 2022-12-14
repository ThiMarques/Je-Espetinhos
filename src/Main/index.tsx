import React, { useState } from 'react';

// import { Oval } from 'react-loading-icons';

import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  TabBarContainer,
  CartItemContainer
} from './styles';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import Product from '../components/Product';
import { productList } from '../mocks/product';
import { GlobalStyles } from '../styles/GlobalStyles';
import { TabBar } from '../components/TabBar';
import { CartItem } from '../components/CartItem';

// import { Product } from './types/Product';

export function Main() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          {productList.map((product) => {
            return <Product key={product._id} product={product}/>;
          })}
        </MenuContainer>
      </Container>

      <Footer>
        <CartItemContainer>
          <CartItem />
        </CartItemContainer>
        <TabBarContainer>
          <TabBar />
        </TabBarContainer>
      </Footer>
    </>
  );
}
