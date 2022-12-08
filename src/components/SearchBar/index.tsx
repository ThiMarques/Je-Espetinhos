import React from 'react';

import { SearchContainer } from './styles';

export function SearchBar() {
  return (
    <SearchContainer>
      <input type='text' className='input' placeholder='Busque por items'/>
    </SearchContainer>
  );
}
