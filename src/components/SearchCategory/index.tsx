import React, { useState } from 'react';
import { SearchModal } from '../SearchModal';
import { Text } from '../Text';
import { SearchCategoryContainer } from './styles';

export function SearchCategory({category}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <SearchModal
        visible={isModalVisible}
        onClose={handleCloseModal}
      />

      <SearchCategoryContainer>

        <div className='image' onClick={handleOpenModal}>
          <Text style={{ color: '#fafafa' }}>Espetinho</Text>
        </div>

      </SearchCategoryContainer>
    </>
  );
}
