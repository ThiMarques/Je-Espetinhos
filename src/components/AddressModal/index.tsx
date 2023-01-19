import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';

import { Text } from '../Text';

import { AddressContent, InformationAddress } from './styles';

interface AddressModalProps {
  onCloseAddressModal: () => void;
}

export function AddressModal({ onCloseAddressModal }: AddressModalProps) {
  return (
    <>
      <AddressContent>
        <div className='textTitle'>
          <div onClick={() => onCloseAddressModal()}>
            <IoIosArrowRoundBack  style={{ color: 'black' }}/>
          </div>
          <Text size={20}>
            Novo endereço
          </Text>
        </div>
        <div>
          <Text size={24} style={{ marginTop: 12, marginBottom: 12 }}>Em qual endereço voce deseja receber o seu pedido?</Text>
        </div>

        <InformationAddress>
          <Text>Comece digitando seu endereço:</Text>
          <input type="text" placeholder='Avenida Paulista, 456, Centro...' style={{ marginTop: 8 }}/>
        </InformationAddress>

        <div className='button'>
          <button onClick={() => onCloseAddressModal()}>
            Confirmar endereço
          </button>
        </div>
      </AddressContent>
    </>
  );
}
