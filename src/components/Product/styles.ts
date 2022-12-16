import styled from 'styled-components';

export const ProductContainer = styled.div`
    background-color: whitesmoke;
    border-radius: 15px;
    border: 1px solid black;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .image {
        width: 100%;
        height: 120px;
        background-color: black;
    };
`;

export const ProductContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    .text-content {
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 5px;

    };

    .add {
        background-color: whitesmoke;
        border: none;
        margin-right: 10px;
        margin-top: 40px;

        display: flex;
        align-items: center;
        justify-content: center;
    };
`;
