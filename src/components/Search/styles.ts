import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0px;
  flex: 1;
  background: #fafafa;
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  padding: 20px 8px 5px;
`;

export const SearchCategoryContainer = styled.div`
  padding: 8px;
`;

export const Footer = styled.div`
  min-height: 110px;
`;

export const TabBarContainer = styled.div`
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
