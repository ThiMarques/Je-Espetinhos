import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { CartItemInterface } from '../../types/CartItem';
import { formatCurrency } from '../../utils/formatCurrency';
import { Text } from '../Text';

import {
  DetailsContainer,
  Overlay,
  Address,
  Items,
  ItemsContainer,
  ItemImage,
  ItemQuantity,
  ItemContet,
  Sauce,
  Soda,
  Payment,
  Request,
  Total
} from './styles';

interface DetailsModalProps {
    visible: boolean;
    onClose: () => void;
    cartItems: CartItemInterface[];
}

export function DetailsModal({ visible, onClose, cartItems }: DetailsModalProps) {
  if (!visible) {
    return null;
  }

  return (
    <Overlay>
      <div className='header'>
        <Text weight='700' style={{ padding: 12 }}>Detalhes do pedido</Text>
        <button className='close' onClick={onClose}>
          <IoMdClose />
        </button>
      </div>

      <DetailsContainer>
        <div className='title'>
          <Text>Pedido 32</Text>
        </div>

        <Address>
          <Text style={{ backgroundColor: '#ebebeb', marginBottom: 8 }}>Endereço</Text>
          <Text>R: Manoel Manoel, n22</Text>
        </Address>

        <div className='order'>
          <Text style={{ backgroundColor: '#ebebeb', marginBottom: 8, display: 'flex' }}>Pedido</Text>
        </div>

        {cartItems.map((cartItem) =>
          <Request
            key={cartItem.product.id}
          >
            <Items>
              <ItemsContainer>
                <ItemImage>

                </ItemImage>

                <ItemQuantity>
                  <Text>{cartItem.quantity} x</Text>
                </ItemQuantity>

                <ItemContet>
                  <div className='itemDetail'>
                    <Text style={{ marginBottom: 2 }}>{cartItem.product.name}</Text>
                  </div>
                  <div className='itemPrice'>
                    <Text style={{ marginBottom: 8 }}>{formatCurrency(cartItem.product.price)}</Text>
                  </div>
                </ItemContet>
              </ItemsContainer>

              <Sauce>
                <Text style={{ marginBottom: 2 }}>Molhos</Text>

                <div>
                  {cartItem.product.sauce.length > 0 ? (
                    <Text style={{ marginBottom: 8 }}>
                      <small>
                        {cartItem.product.sauce}
                      </small>
                    </Text>
                  ) : (
                    <>
                      <Text style={{ marginBottom: 8 }}>
                        <small>
                          Você não selecionou nenhum molho
                        </small>
                      </Text>
                    </>
                  )}
                </div>
              </Sauce>

              <Soda>
                <Text style={{ marginBottom: 2 }}>Bebida</Text>

                <div>
                  {cartItem.product.soda.length > 0 ? (
                    <Text>
                      <small>
                        {cartItem.product.soda}
                      </small>
                    </Text>
                  ) : (
                    <Text style={{ marginBottom: 8 }}>
                      <small>
                      Você não selecionou nenhuma bebida
                      </small>
                    </Text>
                  )}
                </div>
              </Soda>

            </Items>
          </Request>
        )}

        <Payment>
          <Text style={{ backgroundColor: '#ebebeb', marginBottom: 8 }}>Forma de pagamento</Text>
          <Text>Dinheiro</Text>
        </Payment>

        <Total>
          <div className='sub'>
            <Text>Subtotal</Text>
            <Text>{formatCurrency(20)}</Text>
          </div>

          <div className='taxa'>
            <Text>Taxa de entrega</Text>
            <Text>{formatCurrency(0)}</Text>
          </div>

          <div className='some'>
            <Text>Total</Text>
            <Text>{formatCurrency(20)}</Text>
          </div>
        </Total>
      </DetailsContainer>
    </Overlay>
  );
}
