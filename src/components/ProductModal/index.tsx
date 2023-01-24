import React, { useContext } from 'react';

import { IoMdClose } from 'react-icons/io';
import { ProductContext } from '../../contexts/productContext';
import { sauceList } from '../../mocks/sauce';

import { ProductInterface } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Text } from '../Text';

import {
  Overlay,
  Image,
  InfoContainer,
  Title,
  Footer,
  FooterContainer,
  PriceContainer,
  Button,
  SauceContainer,
  Sauce,
  SauceList
} from './styles';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  products: null | ProductInterface;
}

export function ProductModal({ visible, onClose, products }: ProductModalProps) {
  const { handleAddToCart } = useContext(ProductContext);

  if (!products) {
    return null;
  }

  if (!visible) {
    return null;
  }

  function onAddToCart() {
    handleAddToCart(products!);
    onClose();
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

        {/* {products.ingredients.length > 0 && (
          <Ingredients>
            <Text weight='600' color='#666' style={{ marginBottom: 16 }}>Ingredientes</Text>
            <div className='itemsContainer'>
              <div className='items'>
                <Text>{products.ingredients.name}</Text>
              </div>
            </div>
          </Ingredients>
        )} */}

        <SauceContainer>
          <Text size={24}>Vai um molho ?</Text>
          <Text color='#666' style={{ marginTop: 4 }}>
            Você pode escolher ate 4(quatro) molhos de sua preferencia.
            <br />
            Mais de 4(quatro) ira ser adicionado o preço do molho.
          </Text>
          <SauceList>
            {sauceList.map((sauce) => (
              <Sauce
                key={sauce.id}
              >
                <Text size={18} style={{ marginBottom: 16 }}>{sauce.name}</Text>
                <input type='radio' style={{ marginBottom: 16 }}/>
              </Sauce>
            ))}
          </SauceList>
        </SauceContainer>

      </InfoContainer>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text weight='400' color='#666'>Preço</Text>
            <Text weight="600" size={20}>{formatCurrency(products.price)}</Text>
          </PriceContainer>

          <Button onClick={() => onAddToCart()}>
              Adicionar ao carrinho
          </Button>
        </FooterContainer>
      </Footer>

    </Overlay>
  );
}
