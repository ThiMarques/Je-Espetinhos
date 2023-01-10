import styled from 'styled-components';

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #fafafa;
    backdrop-filter: blur(4.5px);
    position: fixed;

    .header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 8px;

        .close {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 6px;

            border-radius: 100%;
            border: none;
        }
    }
`;

export const DetailsContainer = styled.div`
    margin: 8px;

    .title {
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .order {
      padding: 8px;
    }
`;

export const Address = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
`;

export const Items = styled.div`
  margin: 15px 8px 8px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  margin-bottom: 4px;

`;

export const ItemImage = styled.div`
  background-color: black;
  min-width: 50px;
  min-height: 50px;
  border-radius: 4px;

  margin-right: 4px;
`;

export const ItemQuantity = styled.div`
  margin: 0px 8px 0px 10px;
  min-width: 20px;
  height: 20px;
`;

export const ItemContet = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Sauce = styled.div`
  margin-bottom: 4px;
`;

export const Soda = styled.div`

`;

export const Request = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;

    .pedido {
        display: flex;
        flex-direction: column;
    }
`;

export const Payment = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;

    border-bottom-color: #dcdcdc;
    border-bottom-style: solid;
    border-bottom-width: 1px;
`;

export const Total = styled.div`
    padding: 8px;

    .sub {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .taxa {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .some {
        display: flex;
        justify-content: space-between;
    }
`;
