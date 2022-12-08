import React from 'react';
import { Text } from '../Text';
import { SearchCategoryContainer } from './styles';

export function SearchCategory({category}) {
  return (
    <>
      <SearchCategoryContainer>

        <div className='image'>
          <Text style={{ color: '#fafafa' }}>Espetinho</Text>
        </div>

      </SearchCategoryContainer>
    </>
  );
}
