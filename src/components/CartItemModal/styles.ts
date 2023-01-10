import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: #fafafa;
  backdrop-filter: blur(4.5px);
  position: fixed;
`;

export const InformationContent = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .icon {
    color: black;
  };

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    margin-bottom: 10px;
  };

  .clear {
    border: none;
    background-color: transparent;
  };
`;

export const AddressContainer = styled.div`
  /* display: flex; */
  padding: 8px;

  .options {}

  .button {
    border: none;
    background-color: transparent;
  }
`;

export const Address = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 12px;
  height: auto;
  border: 1px solid black;
  border-radius: 8px;

  .addressInfo {
    display: flex;
    flex-direction: column;
    padding: 8px;
  }

  .button {
    border: none;
    padding: 8px;
    background-color: transparent;
  }
`;

export const Time = styled.div`
  margin-top: 12px;
  padding: 8px;
  border: 1px solid red;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  background-color: rgb(235, 235, 235);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const InformationsContainer = styled.div``;

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 15px 8px 8px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
`;


export const ItemsContainer = styled.div`
  display: flex;
`;

export const ItemsImage = styled.div`
  background-color: black;
    min-width: 50px;
    min-height: 50px;
    border-radius: 4px;

    margin-right: 10px;
`;

export const ItemsQuantity = styled.div`
  margin: 0px 4px 0px 10px;
  min-width: 20px;
  height: 20px;
`;

export const ItemsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Actions = styled.div`
  .funcButton  {
    background-color: whitesmoke;
    border: none;
  };
`;

export const Summary = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 8px;
`;

export const ConfirmOrder = styled.div`
  background-color: #D73035;
  border-radius: 8px;
  border: none;
  margin: 8px;
  padding: 10px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    border: none;
    background-color: transparent;
    color: whitesmoke;

    height: 100%;
    width: 100%;
  }
`;
