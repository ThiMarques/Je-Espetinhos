import React from 'react';

import { productList } from '../mocks/product';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { TabBar } from '../components/TabBar';
import Product from '../components/Product';
import { CartItem } from '../components/CartItem';

import { GlobalStyles } from '../styles/GlobalStyles';
import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  TabBarContainer,
  CartItemContainer,
  FooterContainer
} from './styles';

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
            return <Product
              key={product._id}
              product={product}
            />;
          })}
        </MenuContainer>

      </Container>

      <Footer>
        <FooterContainer>

          <CartItemContainer>
            <CartItem />
          </CartItemContainer>

          <TabBarContainer>
            <TabBar />
          </TabBarContainer>

        </FooterContainer>
      </Footer>
    </>
  );
}
