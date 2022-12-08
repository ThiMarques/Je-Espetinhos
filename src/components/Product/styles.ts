import styled from 'styled-components';

export const ProductContainer = styled.div`
    position: relative;
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

    .text-content {
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    };

    .add {
        display: flex;
        flex-direction: column;
        padding: 8px;
        width: 100%;

        .addTo {
            display: flex;
            align-items: center;
            justify-content: center;
        };

        .funcAdd {
            display: flex;

            align-items: center;
            justify-content: space-around;
        };

        button {
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 100%;
        };
    };
`;
