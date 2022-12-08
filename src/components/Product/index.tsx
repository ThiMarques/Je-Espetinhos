import React, { useState } from 'react';

import { Text } from '../Text';
// import PlusCircle from '../../assets/plus-circle';

import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';

import { ProductContainer } from './styles';

function Product({product}) {
  const [count, setCount] = useState(0
    // count: 0,
  );

  // const volumeDecrease = () => {
  //   if(count > 0 && count < 100){
  //     setControls({
  //       count: controls.count -1
  //     });
  //   }
  // };

  return (
    <ProductContainer>
      <div className='image'/>

      <div className='text-content'>
        <Text>Espetinho</Text>
        <Text><small>R$ 10,00</small></Text>
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
  );
}

export default Product;
