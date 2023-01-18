import React, { useState } from 'react';
import { categoryList } from '../../mocks/category';
import { CategoryInterface } from '../../types/Category';
import { SearchModal } from '../SearchModal';
import { Text } from '../Text';
import { SearchCategoryContainer } from './styles';

interface SearchCategoryProps {
  category: CategoryInterface;
}

export function SearchCategory({ category }: SearchCategoryProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<null | CategoryInterface>(null);

  function handleOpenModal(category: CategoryInterface) {
    setIsModalVisible(true);
    setSelectedCategory(category);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      {categoryList.map((categories) => {
        return <SearchModal
          key={categories._id}
          categories={selectedCategory}
          visible={isModalVisible}
          onClose={handleCloseModal}
        />;
      })}

      <SearchCategoryContainer>
        <div className='image' onClick={() => handleOpenModal(category)}>
          <Text style={{ color: '#fafafa' }}>{category.name}</Text>
        </div>
      </SearchCategoryContainer>
    </>
  );
}
