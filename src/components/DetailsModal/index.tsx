import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { CartItemInterface } from '../../types/CartItem';
import { Text } from '../Text';

import {
  DetailsContainer,
  Overlay,
  Address,
  Payment,
  Request,
  Total
} from './styles';

interface DetailsModalProps {
    visible: boolean;
    onClose: () => void;
    cartItems: CartItemInterface[];
}

export function DetailsModal({ visible, onClose, cartItems }: DetailsModalProps) {
  if (!visible) {
    return null;
  }

  return (
    <Overlay>
      <div className='header'>
        <Text weight='700' style={{ padding: 12 }}>Detalhes do pedido</Text>
        <button className='close' onClick={onClose}>
          <IoMdClose />
        </button>
      </div>

      <DetailsContainer>
        <div className='title'>
          <Text>Pedido 32</Text>
        </div>

        <Address>
          <Text style={{ backgroundColor: '#ebebeb', marginBottom: 8 }}>Endereço</Text>
          <Text>R: Manoel Manoel, n22</Text>
        </Address>

        <div className='order'>
          <Text style={{ backgroundColor: '#ebebeb', marginBottom: 8, display: 'flex' }}>Pedido</Text>
        </div>

        {cartItems.map((cartItem) =>
          <Request
            key={cartItem.product.id}
          >
            <Text>{cartItem.quantity} x</Text>
            <Text style={{ marginBottom: 2 }}>{cartItem.product.name}</Text>
            <Text style={{ marginBottom: 8 }}>{cartItem.product.price}</Text>

            <Text style={{ marginBottom: 2 }}>Molhos</Text>
            <Text style={{ marginBottom: 8 }}><small>Molho barbecue</small></Text>

            <Text style={{ marginBottom: 2 }}>Bebida</Text>
            <Text><small>Sem bebida</small></Text>
          </Request>
        )}

        <Payment>
          <Text style={{ backgroundColor: '#ebebeb', marginBottom: 8 }}>Forma de pagamento</Text>
          <Text>Dinheiro</Text>
        </Payment>

        <Total>
          <div className='sub'>
            <Text>Subtotal</Text>
            <Text>R$ 6,00</Text>
          </div>

          <div className='taxa'>
            <Text>Taxa de entrega</Text>
            <Text>R$ 0,00</Text>
          </div>

          <div className='some'>
            <Text>Total</Text>
            <Text>R$ 6,00</Text>
          </div>
        </Total>
      </DetailsContainer>
    </Overlay>
  );
}
