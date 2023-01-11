import React, { useContext, useState } from 'react';
import { ProductContext } from '../../contexts/productContext';

import { DetailsModal } from '../DetailsModal';

import { DetailsContainer } from './styles';

export function Details() {
  const { cartItems } = useContext(ProductContext);

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
        cartItems={cartItems}
      />

      <DetailsContainer>
        <button className='button' onClick={handleOpenModal}>
          Detalhes do pedido
        </button>
      </DetailsContainer>
    </>
  );
}
