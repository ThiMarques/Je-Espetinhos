import React, { useState } from 'react';
import { categoryList } from '../../mocks/category';
import { SearchModal } from '../SearchModal';
import { Text } from '../Text';
import { SearchCategoryContainer } from './styles';

export function SearchCategory({ category }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      {/* <SearchModal
        visible={isModalVisible}
        onClose={handleCloseModal}
      /> */}

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
