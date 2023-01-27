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
          <div>
            <label>Comece digitando seu endereço:</label>
            <input
              type="text"
              placeholder='R: Gregoria de Fregel'
              style={{ marginTop: 8 }}
            />

            <label>Numero da residencia</label>
            <input type="text" placeholder='123'/>

            <label>Complemento</label>
            <input type='text' placeholder='Bloco, apartamento'/>

            <label>Ponto de referencia</label>
            <input type='text' placeholder='Em frente ao'/>

            <label>Bairro</label>
            <input type='text' placeholder='Bairro'/>

            <label>Cidade</label>
            <input type='text' placeholder='Cidade'/>
          </div>
        </InformationAddress>

        <div className='button' >
          <button onClick={() => alert('Trocou o endereco')}>
            Confirmar endereço
          </button>
        </div>
      </AddressContent>
    </>
  );
}
