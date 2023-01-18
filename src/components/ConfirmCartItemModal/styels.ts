import styled from 'styled-components';

export const PageContent = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    margin-bottom: 10px;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    padding: 8px;

    input {
      border-radius: 4px;
      border: solid 1px;
      padding: 8px;
    }
  }
`;

export const AddressContainer = styled.div`
  padding: 8px;

  .options {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;

    button {
      padding: 4px;
      border-radius: 4px;
      border: solid 1px;
      background-color: transparent;
    }
  }
`;

export const Address = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  margin-top: 12px;
  height: auto;

  .addressContent {
    border: 1px solid black;
    border-radius: 8px;

    display: flex;
    justify-content: space-between;

    .addressInfo {
      display: flex;
      flex-direction: column;
      padding: 8px;
      justify-content: space-between;

      .button {
        border: none;
        padding: 8px;
        background-color: transparent;
      }
    }

    input {
      margin-right: 12px;
      position: relative;
    }
  }
`;

export const ObservationContainer = styled.div`
  padding: 8px;

  .obsPlace {
    display: flex;
    flex-direction: column;

    input {
      border-radius: 4px;
      border: solid 1px;
      padding: 8px;
      margin-top: 8px;
      height: 10rem;
    }

    input::placeholder {
      position: absolute;
      top: 8;
      left: 8;
    }
  }
`;

export const ConfirmContent = styled.div`
  background-color: #D73035;
  border-radius: 8px;
  border: none;
  margin: 8px;
  padding: 10px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    background-color: transparent;
    color: whitesmoke;

    height: 100%;
    width: 100%;
  }
`;
