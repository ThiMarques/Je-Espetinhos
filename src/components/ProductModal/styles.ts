import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  background: #fafafa;
  position: fixed;
  z-index: 1;
`;

export const Image = styled.image`
  background-color: black;
  position: absolute;
  height: 200px;
  left: 0px;
  right: 0px;
  top: 0px;

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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  overflow: scroll;

  position: absolute;
  height: 361px;
  left: 24px;
  right: 24px;
  top: 232px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 345px;
  height: 61px;
`;

export const Ingredients = styled.div`
  margin-top: 32px;
  flex: 1;
  width: 100%;

  .itemsContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 20px;

    width: 100%;
    height: 56px;

    border: 1px solid rgba(204, 204, 204, 0.3);
    border-radius: 8px;
  }
`;

export const SauceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

export const SauceList = styled.div`
  overflow: scroll;
  max-height: 350px;
  margin-top: 16px;
`;

export const Sauce = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 16px;
  width: 100%;
  border-bottom: 1px solid rgb(239, 38, 38);
`;

export const Footer = styled.div`
  min-height: 110px;
  background-color: #fff;
  padding: 16px 24px;
  `;

export const FooterContainer = styled.footer`
  display: flex;
  position: fixed;
  background-color: #fafafa;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  height: 90px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: #D73035;
  border: none;
  color: white;

  padding: 8px;
  border-radius: 8px;
`;
