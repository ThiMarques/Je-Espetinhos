import React, { useContext, useState } from 'react';

import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
  IoIosArrowRoundBack
} from 'react-icons/io';

import { ProductContext } from '../../contexts/productContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { ConfirmCartItemModal } from '../ConfirmCartItemModal';
import { Header } from '../Header';
import { Text } from '../Text';

import {
  Overlay,
  InformationContent,
  TitleContainer,
  Items,
  TotalContainer,
  ConfirmOrder,
  ItemsContent,
  ItemsQuantity,
  Actions,
  ItemsContainer,
  ItemsImage,
  Summary,
  Title,
  InformationsContainer
} from './styles';

interface CartItemModalProps {
  onClose: () => void;
}

export function CartItemModal({  onClose }: CartItemModalProps ) {
  const { cartItems, setCartItems, handleAddToCart, total, handleDecrementCartItem } = useContext(ProductContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  function clearCartItem() {
    setCartItems([]);
  }

  function handleConfirmModalOrder() {
    setIsModalVisible(true);
  }

  function handleCloseModalOrder() {
    setIsModalVisible(false);
  }

  return (
    <>
      <Overlay>
        <Header />

        {isModalVisible &&
          <ConfirmCartItemModal
            onCloseModal={handleCloseModalOrder}
          />
        }

        <InformationContent>

          <TitleContainer>
            <div className='icon' onClick={onClose}>
              <IoIosArrowRoundBack />
            </div>
            <div className='title'>
              <Text weight='600' size={24}>
              Informações sobre o pedido
              </Text>
            </div>
            <button className='clear' onClick={() => clearCartItem()}>
              <Text size={14} color='#D73035'>Limpar</Text>
            </button>
          </TitleContainer>



          <Title>
            <Text size={20}>
              Itens selecionados:
            </Text>
          </Title>

          {cartItems.map((cartItem) => (
            <InformationsContainer
              key={cartItem.product.id}
            >
              <Items>
                <ItemsContainer>
                  <ItemsImage>
                    {/* {cartItem.product.image} */}
                  </ItemsImage>

                  <ItemsQuantity>
                    <Text color='#666'>{cartItem.quantity} x</Text>
                  </ItemsQuantity>

                  <ItemsContent>
                    <div className='itemsDetails'>
                      <Text weight='600' size={18} style={{ marginBottom: 4 }}>{cartItem.product.name}</Text>
                    </div>
                    <div className='itemsPrice'>
                      <Text weight="400" size={14} color="#666">{formatCurrency(cartItem.product.price)}</Text>
                    </div>
                  </ItemsContent>
                </ItemsContainer>

                <Actions>
                  <button className='funcButton' style={{ marginRight: 24 }} onClick={() => handleAddToCart(cartItem.product)}>
                    <IoIosAddCircleOutline />
                  </button>

                  <button className='funcButton' onClick={() => handleDecrementCartItem(cartItem.product)}>
                    <IoIosRemoveCircleOutline />
                  </button>
                </Actions>

              </Items>

            </InformationsContainer>
          ))}

          <Summary>
            <TotalContainer>
              <Text color='#666'>Total</Text>
              <Text size={20} weight="600">{formatCurrency(total)}</Text>
            </TotalContainer>

          </Summary>
          <ConfirmOrder >
            <button className='button' onClick={() => handleConfirmModalOrder()}>
              Confirmar pedido
            </button>
          </ConfirmOrder>

        </InformationContent>

      </Overlay>
    </>
  );
}
