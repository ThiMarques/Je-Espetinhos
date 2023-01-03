import React from 'react';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline, IoIosArrowRoundBack, IoIosArrowForward } from 'react-icons/io';

import { CartItemInterface } from '../../types/CartItem';
import { formatCurrency } from '../../utils/formatCurrency';
import { Header } from '../Header';
import { Text } from '../Text';

import {
  Overlay,
  InformationContent,
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
  Address
} from './styles';

interface CartItemModalProps {
  cartItem: CartItemInterface;
  visible: boolean;
  onClose: () => void;
}

export function CartItemModal({ cartItem, visible, onClose }: CartItemModalProps) {
  // console.log(cartItem);
  if (!cartItem) {
    return null;
  }

  if (!visible) {
    return null;
  }

  return (
    <>
      <Overlay>
        <Header />

        <InformationContent>
          <div className='title'>
            <Text weight='600' size={24}>
              Informações sobre o pedido
            </Text>
          </div>

          <AddressContainer>
            <div className='options'>
              <Text size={18} style={{ marginRight: 8 }}>Entrega</Text>
              <Text size={18}>Retirada</Text>
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
            <div className='icon' onClick={onClose}>
              <IoIosArrowRoundBack />
            </div>

            <Text size={20}>
              Itens selecionados:
            </Text>
          </Title>

          <Items>
            <ItemsContainer>
              <ItemsImage>
                {/* {cartItem.product.image} */}
              </ItemsImage>

              <ItemsQuantity>
                <Text color='#666'>{cartItem.quantity}x</Text>
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
              <button className='funcButton' style={{ marginRight: 24 }}>
                <IoIosAddCircleOutline />
              </button>

              <button className='funcButton'>
                <IoIosRemoveCircleOutline />
              </button>
            </Actions>
          </Items>

          <Summary>
            <TotalContainer>
              <Text color='#666'>Total</Text>
              <Text size={20} weight="600">{formatCurrency(200)}</Text>
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
