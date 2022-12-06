import styled from 'styled-components';

export const Container = styled.div`
  margin-top: '0';
  flex: 1;
  background: #fafafa;
`;

export const CategoriesContainer = styled.div`
  height: 73px;
  margin-top: 18px;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: grid;
  column-gap: 8px;
  row-gap: 8px;
  grid-template-columns: 1fr 1fr;
`;

export const Footer = styled.div`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`;

export const FooterContainer = styled.footer``;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: 32px;
`;
