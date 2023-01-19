import React from 'react';
import { categoryList } from '../../mocks/category';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { CartItem } from '../CartItem';

import { Header } from '../Header';
import { SearchBar } from '../SearchBar';
import { SearchCategory } from '../SearchCategory';
import { TabBar } from '../TabBar';
import { Text } from '../Text';

import {
  FooterContainer,
  Container,
  SearchBarContainer,
  SearchCategoryContainer,
  Footer
} from './styles';

export function Search() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />

        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>

        <SearchCategoryContainer>
          <Text weight='600' style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>Categorias</Text>

          {categoryList.map((category) => {
            return <SearchCategory key={category._id} category={category}/>;
          })}
        </SearchCategoryContainer>
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
