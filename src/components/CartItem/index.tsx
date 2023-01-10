import React, { useState, useContext } from 'react';

import { CartItemModal } from '../CartItemModal';
import { Text } from '../Text';
import { ProductContext } from '../../contexts/productContext';

import { Item, ProductContainer } from './styles';

export function CartItem() {
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
      {isModalVisible && cartItems.length >= 1 &&
        <CartItemModal
          onClose={handleCloseModal}
        />
      }

      <Item onClick={handleOpenModal}>
        <ProductContainer>
          {cartItems.length > 0 ? (
            <>
              <Text className='on'>
              Informações sobre o pedido
              </Text>
            </>
          ) : (
            <div className='off'>
              <Text>
                Seu carrinho está vazio
              </Text>
            </div>
          )}
        </ProductContainer>
      </Item>
    </>
  );
}
