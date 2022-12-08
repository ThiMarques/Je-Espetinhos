import React from 'react';
import { categoryList } from '../../mocks/category';
import { GlobalStyles } from '../../styles/GlobalStyles';

import { Header } from '../Header';
import { SearchBar } from '../SearchBar';
import { SearchCategory } from '../SearchCategory';
import { TabBar } from '../TabBar';
import { Text } from '../Text';

import { TabBarContainer, Container, SearchBarContainer, SearchCategoryContainer } from './styles';

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
          {categoryList.map((category) => {
            return <SearchCategory key={category._id} category={category}/>;
          })}
        </SearchCategoryContainer>




        <TabBarContainer>
          <TabBar />
        </TabBarContainer>

      </Container>
    </>
  );
}
