import styled from 'styled-components';

export const AddressContent = styled.div`
  top: 0;
  left: 0;

  background-color: #fff;
  width: 100%;
  height: 100%;

  padding: 8px;
  overflow: scroll;
  padding-bottom: 150px;

  .textTitle {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .button {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: solid 2px #D73035;
      border-radius: 8px;
      padding: 8px;
      background-color: transparent;
    }
  }
`;

export const InformationAddress = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 8px;

  div {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 8px;
    border-radius: 8px;
    border: solid 1px;
    height: 4rem;
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;
