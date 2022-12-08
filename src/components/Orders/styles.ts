import styled from 'styled-components';

export const Container = styled.div`
  margin-top: '0';
  flex: 1;
  background: #fafafa;
`;

export const OrderContainer = styled.div`
  .text {
    display: flex;

    margin-bottom: 8px;
    padding: 8px;

    font-size: 32px;
  }
`;

export const Footer = styled.div`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`;

export const TabBarContainer = styled.div`
  background-color: #fafafa;
  display: flex;
  position: fixed;
  height: 50px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  justify-content: space-around;
  z-index: 1000;
  box-shadow: 0 1px 3px rgb(0 0 0 / 24%);
`;
