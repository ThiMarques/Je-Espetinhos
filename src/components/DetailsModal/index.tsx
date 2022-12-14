import React from 'react';
import { IoMdClose } from 'react-icons/io';
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
}

export function DetailsModal({ visible, onClose }: DetailsModalProps) {
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

        <Request>
          <Text style={{ backgroundColor: '#ebebeb', marginBottom: 8 }}>Pedido</Text>

          <Text style={{ marginBottom: 2 }}>1x Espetinho</Text>
          <Text style={{ marginBottom: 8 }}>R$ 6,00</Text>

          <Text style={{ marginBottom: 2 }}>Molhos</Text>
          <Text style={{ marginBottom: 8 }}><small>Molho barbecue</small></Text>

          <Text style={{ marginBottom: 2 }}>Bebida</Text>
          <Text><small>Sem bebida</small></Text>
        </Request>

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
