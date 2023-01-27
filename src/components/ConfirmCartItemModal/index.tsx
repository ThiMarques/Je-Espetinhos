import React, { useState } from 'react';

import { IoIosArrowRoundBack } from 'react-icons/io';

import { AddressModal } from '../AddressModal';
import { Text } from '../Text';

import { clienlist } from '../../mocks/client';

import {
  PageContent,
  TitleContainer,
  ConfirmContent,
  Address,
  AddressContainer,
  AddressInformation,
  ObservationContainer,
  InformationContainer
} from './styels';

interface ConfirmCartItemModalProps {
  onCloseModal: () => void;
}

export function ConfirmCartItemModal({ onCloseModal }: ConfirmCartItemModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function openAddressModal() {
    setIsModalVisible(true);
  }

  function closeAddressModal() {
    setIsModalVisible(false);
  }

  function ConfirmOrder() {
    alert('Seu pedido foi feito');
  }

  return (
    <>
      {isModalVisible &&
        <AddressModal
          onCloseAddressModal={closeAddressModal}
        />
      }

      <PageContent>
        <TitleContainer>
          <div onClick={onCloseModal}>
            <IoIosArrowRoundBack  style={{ color: 'black' }}/>
          </div>
          <div className='title'>
            <Text weight='600' size={24}>
              Confirmar pedido
            </Text>
          </div>
        </TitleContainer>

        {clienlist.map((client) => {
          return (
            <>
              <InformationContainer
                key={client.id}
              >
                <div>
                  <Text style={{ marginBottom: 4 }}>Quem vai receber o pedido ?</Text>
                  {client.name.length > 1 ? (
                    <Text size={24}>{client.name}</Text>
                  ) : (
                    <input type="text" placeholder='Insira o nome da pessoa'/>
                  )}
                </div>

                <div>
                  <Text style={{ marginBottom: 4}}>Numero do celular da pessoa</Text>
                  {client.phone.length > 1 ? (
                    <Text size={22}>{client.phone}</Text>
                  ) : (
                    <input type="text" placeholder='Insira o numero da pessoa'/>
                  )}
                </div>
              </InformationContainer>

              <AddressContainer>
                <div className='options'>
                  <Text size={20}>Selecione a forma de entrega</Text>

                  <button onClick={() => openAddressModal()}>
                  Alterar endereço
                  </button>
                </div>

                <Address>
                  <div className='addressContent' style={{ marginBottom: 8 }}>
                    <div className='addressInfo'>
                      <Text style={{ marginBottom: 2 }} size={14} color="#666">Entregar em</Text>
                      <Text style={{ marginBottom: 2 }}>
                        {client.address.map((address) => {
                          return (
                            <AddressInformation
                              key={address.id}
                            >
                              <Text>{address.street}, {address.number}, {address.complement}</Text>
                              <Text size={14} color="#666">{address.district} ,{address.city}</Text>
                            </AddressInformation>
                          );
                        })}
                      </Text>
                    </div>
                    <input type="radio" name='radio'/>
                  </div>

                  <div className='addressContent'>
                    <div className='addressInfo'>
                      <Text style={{ marginBottom: 2 }} size={14} color='#666'>Retirar em</Text>
                      <Text>Av. Bezerra de Menezes, 412</Text>
                      <Text size={14} color="#666">Vila Alves Dias, São Bernardo do Campo</Text>
                    </div>
                    <input type="radio" name="radio" />
                  </div>
                </Address>
              </AddressContainer>
            </>
          );
        })}


        <ObservationContainer>
          <div>
            <Text size={20}>Alguma observação a fazer ?</Text>
          </div>
          <div className='obsPlace'>
            <input type="text" placeholder='Insira a observação'/>
          </div>
        </ObservationContainer>

        <ConfirmContent>
          <button onClick={() => ConfirmOrder()}>
          Confirmar pedido !
          </button>
        </ConfirmContent>
      </PageContent>
    </>
  );
}
