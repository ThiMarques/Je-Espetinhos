import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { productList } from '../../mocks/product';
import { CategoryInterface } from '../../types/Category';
import Product from '../Product';
import { Text } from '../Text';
import { Image, Overlay, ProductContainer, } from './styles';

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
  categories: null | CategoryInterface;
}

export function SearchModal({ visible, onClose, categories }: SearchModalProps) {
  if (!visible) {
    return null;
  }

  if (!categories) {
    return null;
  }

  return (
    <Overlay>
      <Image>
        <button className='close' onClick={onClose}>
          <IoMdClose style={{ color: '#fff' }}/>
        </button>
        <Text weight='700'>{categories.name}</Text>
      </Image>

      <ProductContainer>
        {productList.map((product) => {
          return <Product
            key={product.id}
            product={product}
          />;
        })}
      </ProductContainer>
    </Overlay>
  );
}
