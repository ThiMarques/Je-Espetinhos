import React, { useState } from 'react';

import { DetailsModal } from '../DetailsModal';
import { Text } from '../Text';

import { DetailsContainer } from './styles';

export function Details() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <DetailsModal
        visible={isModalVisible}
        onClose={handleCloseModal}
      />

      <DetailsContainer>
        <button type='button' onClick={handleOpenModal}>
          Detalhes do pedido
        </button>
      </DetailsContainer>
    </>
  );
}
