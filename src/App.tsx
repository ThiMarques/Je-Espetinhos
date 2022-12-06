import React, { useState } from 'react';
// import { Oval } from 'react-loading-icons';

import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
  CenteredContainer
} from './AppStyles';

import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Menu } from './components/Menu';
// import { Product } from './types/Product';

export function App() {
  // const [products, setProducts] = useState<Product[]>([]);

  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu
            // products={products}
          />
        </MenuContainer>
      </Container>


    </>
  );
}
