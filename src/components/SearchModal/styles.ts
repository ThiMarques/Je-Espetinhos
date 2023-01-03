import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: #fafafa;
  backdrop-filter: blur(4.5px);
  position: fixed;

  overflow: auto;
`;

export const Image = styled.image`
  background-color: #dcdcdc;
  position: fixed;
  height: 100px;
  left: 0px;
  right: 0px;
  top: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  .close {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px;

    position: absolute;
    width: 44px;
    height: 44px;
    right: 24px;
    top: 24px;

    background: rgba(0, 0, 0, 0.5);
    border-radius: 16px;
    border: none;
  }
`;

export const ProductContainer = styled.div`
  margin-top: 130px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 70px;
`;

