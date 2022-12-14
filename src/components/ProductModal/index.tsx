import React from 'react';

import { IoIosAddCircleOutline, IoIosRemoveCircleOutline, IoMdClose } from 'react-icons/io';

import { productList } from '../../mocks/product';
import { formatCurrency } from '../../utils/formatCurrency';

import { Text } from '../Text';

import {
  Overlay,
  Image,
  InfoContainer,
  Title,
  Ingredients,
  Footer,
  FooterContainer,
  PriceContainer,
  Button
} from './styles';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  products: [];
}

export function ProductModal({ visible, onClose, products }: ProductModalProps) {
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
          <Text weight='600' size={24}>{products.name}</Text>
          <Text color='#666' style={{ marginTop: 8 }}>{products.description}</Text>
        </Title>

        <Ingredients>
          <Text style={{ marginBottom: 16 }}>Ingredientes</Text>
          <div className='itemsContainer'>
            <div className='items'>
              <Text>Carne</Text>
            </div>
          </div>
        </Ingredients>

        <Footer>
          <FooterContainer>
            <PriceContainer>
              <Text weight='400' size={16}>Preço</Text>
              <Text weight='600' size={20}>{formatCurrency(products.price)}</Text>
            </PriceContainer>

            <Button>
              Adicionar ao carrinho
            </Button>
          </FooterContainer>
        </Footer>
      </InfoContainer>

    </Overlay>
  );
}
