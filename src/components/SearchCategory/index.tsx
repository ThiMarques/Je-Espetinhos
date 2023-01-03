import React, { useState } from 'react';
import { categoryList } from '../../mocks/category';
import { Category } from '../../types/Category';
import { SearchModal } from '../SearchModal';
import { TabBar } from '../TabBar';
import { Text } from '../Text';
import { SearchCategoryContainer } from './styles';

interface SearchCategoryProps {
  category: Category;
}

export function SearchCategory({ category }: SearchCategoryProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      {categoryList.map((categories) => {
        return <SearchModal
          key={categories._id}
          categories={categories}
          visible={isModalVisible}
          onClose={handleCloseModal}
        />;
      })}

      <SearchCategoryContainer>
        <div className='image' onClick={handleOpenModal}>
          <Text style={{ color: '#fafafa' }}>{category.name}</Text>
        </div>
      </SearchCategoryContainer>
    </>
  );
}
