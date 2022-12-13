import React from 'react';

import { IoIosAddCircleOutline, IoIosRemoveCircleOutline, IoMdClose } from 'react-icons/io';

import { Text } from '../Text';

import {
  Overlay,
  Image,
  InfoContainer,
  Title,
  Ingredients
} from './styles';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
}

export function ProductModal({ visible, onClose }: ProductModalProps) {
  if (!visible) {
    return null;
  }

  return (
    <Overlay>
      <Image>
        <button className='close' onClick={onClose}>
          <IoMdClose style={{ color: '#fff' }}/>
        </button>
      </Image>

      <InfoContainer>
        <Title>
          <Text weight='600' size={24}>Espetinho</Text>
          <Text color='#666' style={{ marginTop: 8 }}>Espetinho de Carne tradicional</Text>
        </Title>

        <Ingredients>
          <Text style={{ marginBottom: 16 }}>Ingredientes</Text>
          <div className='itemsContainer'>
            <div className='items'>
              <Text>Carne</Text>
            </div>
          </div>
        </Ingredients>
      </InfoContainer>
    </Overlay>
  );
}
