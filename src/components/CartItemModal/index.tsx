import React, { useContext, useState } from 'react';

import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
  IoIosArrowRoundBack,
  IoIosArrowForward
} from 'react-icons/io';

import { ProductContext } from '../../contexts/productContext';
import { CartItemInterface } from '../../types/CartItem';
import { formatCurrency } from '../../utils/formatCurrency';
import { Header } from '../Header';
import { Text } from '../Text';

import {
  Overlay,
  InformationContent,
  TitleContainer,
  Items,
  AddressContainer,
  Time,
  TotalContainer,
  ConfirmOrder,
  ItemsContent,
  ItemsQuantity,
  Actions,
  ItemsContainer,
  ItemsImage,
  Summary,
  Title,
  Address,
  InformationsContainer
} from './styles';

interface CartItemModalProps {
  onClose: () => void;
}

export function CartItemModal({  onClose }: CartItemModalProps) {

  const [count, setCount] = useState(1);
  const { cartItems, setCartItems } = useContext(ProductContext);

  function clearCartItem() {
    setCartItems([]);
  }

  return (
    <>
      <Overlay>
        <Header />

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

          <AddressContainer>
            <div className='options'>

              <button className='button'>
                <Text size={18} style={{ marginRight: 8, color: '#D73035' }}>Entrega</Text>
              </button>

              <button className='button'>
                <Text size={18}>Retirada</Text>

              </button>
            </div>

            <Address>
              <div className='addressInfo'>
                <Text style={{ marginBottom: 2 }} size={14} color="#666">Entregar em</Text>
                <Text style={{ marginBottom: 2 }}>R: Gregoria de Fregel, 380</Text>
                <Text size={14} color="#666">Parque Espacial - Bl 38 Ap 02</Text>
              </div>

              <button className='button' onClick={() => alert('button')}>
                <IoIosArrowForward color='#D73035'/>
              </button>
            </Address>

            <Time>
              <Text size={14} color='#D73035'>50 min</Text>
              <Text size={12} color='#666'>Frete: R$ 12,00</Text>
            </Time>

          </AddressContainer>

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
                  <button className='funcButton' style={{ marginRight: 24 }} onClick={() => setCount(count + 1)}>
                    <IoIosAddCircleOutline />
                  </button>

                  <button className='funcButton' onClick={() => setCount(count - 1)}>
                    <IoIosRemoveCircleOutline />
                  </button>
                </Actions>

              </Items>

            </InformationsContainer>
          ))}

          <Summary>
            <TotalContainer>
              <Text color='#666'>Total</Text>
              <Text size={20} weight="600">{formatCurrency(120)} { /* (cartItem.product.price * cartItem.quantity) */}</Text>
            </TotalContainer>

            <ConfirmOrder>
              <button className='button' onClick={() => alert('Confirmar pedido')}>
                Confirmar pedido
              </button>
            </ConfirmOrder>
          </Summary>

        </InformationContent>

      </Overlay>
    </>
  );
}
