import React from 'react';

import { IoMdClose } from 'react-icons/io';

// import { productList } from '../../mocks/product';
import { ProductInterface } from '../../types/Product';
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
  products: null | ProductInterface;
}

export function ProductModal({ visible, onClose, products }: ProductModalProps) {
  if (!products) {
    return null;
  }

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

        {products.ingredients.length > 0 && (
          <Ingredients>
            <Text weight='600' color='#666' style={{ marginBottom: 16 }}>Ingredientes</Text>
            <div className='itemsContainer'>
              <div className='items'>
                <Text>{products.ingredients.name}</Text>
              </div>
            </div>
          </Ingredients>
        )}

        <Footer>
          <FooterContainer>
            <PriceContainer>
              <Text weight='400' color='#666'>Preço</Text>
              <Text weight="600" size={20}>{formatCurrency(products.price)}</Text>
            </PriceContainer>

            <Button onClick={() => alert('Adicionou ao pedido!')}>
              Adicionar ao carrinho
            </Button>
          </FooterContainer>
        </Footer>
      </InfoContainer>

    </Overlay>
  );
}
