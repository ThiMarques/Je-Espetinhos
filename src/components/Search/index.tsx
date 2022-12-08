import React from 'react';
import { categoryList } from '../../mocks/category';
import { GlobalStyles } from '../../styles/GlobalStyles';

import { Header } from '../Header';
import { SearchBar } from '../SearchBar';
import { SearchCategory } from '../SearchCategory';
import { TabBar } from '../TabBar';
import { Text } from '../Text';

import {
  TabBarContainer,
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
          <Text>Categorias</Text>

          {categoryList.map((category) => {
            return <SearchCategory key={category._id} category={category}/>;
          })}
        </SearchCategoryContainer>
      </Container>

      <Footer>
        <TabBarContainer>
          <TabBar />
        </TabBarContainer>
      </Footer>

    </>
  );
}
