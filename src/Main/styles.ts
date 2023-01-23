import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0px;
  flex: 1;
  background: #fafafa;
`;

export const CategoriesContainer = styled.div`
  height: 73px;
  margin-top: 18px;
`;

export const SearchBarContainer = styled.div`
  background-color: blue;
  height: 40px;
  padding-top: 2px;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: grid;
  column-gap: 8px;
  grid-template-columns: 1fr 1fr;
  padding: 8px;
`;

export const Footer = styled.div`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`;

export const FooterContainer = styled.footer`
  background-color: #fafafa;
  display: flex;
  position: fixed;
  flex-direction: column;
  height: 100px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  justify-content: space-around;
  z-index: 1000;
  box-shadow: 0 1px 3px rgb(0 0 0 / 24%);

  .cartItemContainer {
    padding: 8px;
    margin-top: 8px;
  }

  .tabBarContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 8px;
    margin-top: 8px;
  }
`;
