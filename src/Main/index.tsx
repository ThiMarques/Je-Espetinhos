import React, { createContext, useState } from 'react';

import { productList } from '../mocks/product';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { TabBar } from '../components/TabBar';
import Product from '../components/Product';
import { CartItem } from '../components/CartItem';
import { ProductInterface } from '../types/Product';

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

// const ProductsCartContext = createContext('light');

export function Main() {

  return (
    <>
      <GlobalStyles />
      <Container>

        {/* <ProductsCartContext.Provider value='dark'> */}
        <Header />
        {/* </ProductsCartContext.Provider> */}

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
            <CartItem
              // product={product}
            />
          </CartItemContainer>

          <TabBarContainer>
            <TabBar />
          </TabBarContainer>

        </FooterContainer>
      </Footer>
    </>
  );
}
