import styled from 'styled-components';

export const Item = styled.div``;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .on {
    color: whitesmoke;
    background-color: #D73035;
    border-radius: 8px;
    width: 100%;
    padding: 8px 0;

    display: flex;
    justify-content: center;
  }

  .off {
    background-color: #ddd;
    border-radius: 8px;
    width: 100%;
    padding: 8px 0;

    display: flex;
    justify-content: center;
  }
`;

export const Actions = styled.div``;

export const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  background-color: black;
`;

export const QuantityContainer = styled.div`
  min-width: 20px;
`;
