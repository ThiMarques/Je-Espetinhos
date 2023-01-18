import React from 'react';

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
          <Text size={20}>
            Mudar o endereço de entrega
          </Text>
        </div>

        <InformationAddress>
          <Text>Endereço</Text>
          <input type="text" placeholder='Insira o nome da sua rua' style={{ marginTop: 4 }}/>
          <input type="text" placeholder='Insira o numero da sua casa' style={{ marginTop: 8 }}/>
          <input type="text" placeholder='Complemento' style={{ marginTop: 8 }}/>
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
