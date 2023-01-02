import React, { useState } from 'react';

import { productList } from '../../mocks/product';
import { CartItemInterface } from '../../types/CartItem';
// import { ProductInterface } from '../../types/Product';
import { CartItemModal } from '../CartItemModal';
import { Text } from '../Text';

import { Item, ProductContainer } from './styles';

export function CartItem() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemInterface[]>([
    // {
    //   quantity: 1,
    //   product: productList[0],
    // },
    {
      quantity: 2,
      product: productList[1],
    },
    {
      quantity: 4,
      product: productList[2],
    },
    {
      quantity: 5,
      product: productList[3],
    },
  ]);

  console.log(cartItems);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      {cartItems.map((cartItem) => {
        return <CartItemModal
          key={cartItem.product.id}
          cartItem={cartItem}
          visible={isModalVisible}
          onClose={handleCloseModal}
        />;
      })}

      <Item onClick={handleOpenModal}>
        <ProductContainer>
          {cartItems.length > 0 ? (
            <Text color='whitesmoke'>
              Informações sobre o pedido
            </Text>
          ) : (
            <div className='off'>
              <Text color='whitesmoke'>
                Seu carrinho está vazio
              </Text>
            </div>
          )}
        </ProductContainer>
      </Item>
    </>
  );
}
