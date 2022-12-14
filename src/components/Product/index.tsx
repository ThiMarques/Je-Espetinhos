import React, { useState } from 'react';

import { Text } from '../Text';

import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';

import { ProductModal } from '../ProductModal';
import { formatCurrency } from '../../utils/formatCurrency';
import { productList } from '../../mocks/product';

import {
  ProductContainer,
} from './styles';
import { PProduct } from '../../types/Product';

// interface ProductProps {
//   product: product[];
// }

function Product({ product }) {
  const [count, setCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      {/* <ProductModal
        visible={isModalVisible}
        onClose={handleCloseModal}
      /> */}
      {productList.map((products) => {
        return <ProductModal
          key={products._id}
          products={products}
          visible={isModalVisible}
          onClose={handleCloseModal}
        />;
      })}

      <div>
        <ProductContainer >
          <div className='image' onClick={() => handleOpenModal()}/>
          <div className='text-content'>
            <Text>{product.name}</Text>
            <Text><small>{formatCurrency(product.price)}</small></Text>
          </div>

          <div className='add'>
            <Text className='addTo'>Adicionar ao carrinho</Text>

            <div className='funcAdd'>
              <button onClick={() => setCount(count - 1)}>
                <IoIosRemoveCircleOutline />
              </button>

              <Text>{count}</Text>

              <button onClick={() => setCount(count + 1)}>
                <IoIosAddCircleOutline />
              </button>
            </div>
          </div>
        </ProductContainer>
      </div>
    </>
  );
}

export default Product;
