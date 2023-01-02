import React, { useState } from 'react';

// import { Oval } from 'react-loading-icons';

import { productList } from '../mocks/product';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { GlobalStyles } from '../styles/GlobalStyles';
import { TabBar } from '../components/TabBar';
import Product from '../components/Product';
import { CartItem } from '../components/CartItem';
import { CartItemInterface } from '../types/CartItem';
// import { Text } from '../components/Text';

import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  TabBarContainer,
  CartItemContainer,
  FooterContainer
} from './styles';
import { ProductInterface } from '../types/Product';

export function Main() {
  const [selectedProduct, setSelectedProduct] = useState('');

  function addToCart(product: ProductInterface) {
    alert(product.name);
  }

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
              onAddToCart={addToCart}
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
