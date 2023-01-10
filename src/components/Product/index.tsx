import React, { useContext, useState } from 'react';

import { IoIosAddCircleOutline } from 'react-icons/io';

import { productList } from '../../mocks/product';

import { Text } from '../Text';
import { ProductModal } from '../ProductModal';
import { formatCurrency } from '../../utils/formatCurrency';
import { ProductInterface } from '../../types/Product';

import { ProductContainer, ProductContent } from './styles';

interface ProductProps {
  product: ProductInterface;
}

function Product ({ product }: ProductProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | ProductInterface>(null);


  function handleOpenModal(product: ProductInterface) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  function onAddToCart(product: ProductInterface) {
    alert(product.name);
  }

  return (
    <>
      {productList.map((products) => {
        return <ProductModal
          key={products._id}
          products={selectedProduct}
          visible={isModalVisible}
          onClose={handleCloseModal}
          onAddToCart={onAddToCart}
        />;
      })}

      <div>
        <ProductContainer style={{ marginBottom: 10 }}>
          <div className='image' onClick={() => handleOpenModal(product)}>
            {/* {product.imagePath} */}
          </div>

          <ProductContent>
            <div className='text-content'>
              <Text weight='600'>{product.name}</Text>

              {/* <Text>{setCartItems}</Text> */}

              <Text color='#666' size={14}>{product.description}</Text>
              <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
            </div>

            <button className='add' onClick={() => alert('Cliquei')}>
              <IoIosAddCircleOutline />
            </button>
          </ProductContent>

        </ProductContainer>
      </div>
    </>
  );
}

export default Product;
