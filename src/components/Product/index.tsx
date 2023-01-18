import React, { useContext, useState } from 'react';

import { IoIosAddCircleOutline } from 'react-icons/io';

import { productList } from '../../mocks/product';

import { Text } from '../Text';
import { ProductModal } from '../ProductModal';
import { formatCurrency } from '../../utils/formatCurrency';
import { ProductInterface } from '../../types/Product';

import { ProductContainer, ProductContent } from './styles';
import { ProductContext } from '../../contexts/productContext';

interface ProductProps {
  product: ProductInterface;
}

function Product ({ product }: ProductProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | ProductInterface>(null);
  const { handleAddToCart } = useContext(ProductContext);

  function handleOpenModal(product: ProductInterface) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      {productList.map((products) => {
        return <ProductModal
          key={products.id}
          products={selectedProduct}
          visible={isModalVisible}
          onClose={handleCloseModal}
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
              <Text color='#666' size={14}>{product.description}</Text>
              <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
            </div>

            <button className='add' onClick={() => handleAddToCart(product)}>
              <IoIosAddCircleOutline />
            </button>
          </ProductContent>

        </ProductContainer>
      </div>
    </>
  );
}

export default Product;
