import React from 'react';
import { IoMdClose } from 'react-icons/io';
import Product from '../Product';
import { Text } from '../Text';
import { Image, Overlay, ProductContainer } from './styles';

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
}

export function SearchModal({ visible, onClose }: SearchModalProps) {
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

      <ProductContainer>
        <Product />
      </ProductContainer>
    </Overlay>
  );
}
