import React, { useEffect } from 'react';
import axios from 'axios';

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
  FooterContainer
} from './styles';

export function Main() {
  // useEffect(() => {
  //   axios.get('http://localhost:2300/categories').then((response) => {
  //     response.data;
  //     console.log('Promise resolvida');
  //   });
  // }, []);

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
              key={product.id}
              product={product}
            />;
          })}
        </MenuContainer>

      </Container>

      <Footer>
        <FooterContainer>

          <div className='cartItemContainer'>
            <CartItem />
          </div>

          <div className='tabBarContainer'>
            <TabBar />
          </div>

        </FooterContainer>
      </Footer>
    </>
  );
}
