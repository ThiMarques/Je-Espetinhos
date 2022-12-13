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

export const ProductContainer = styled.div`
    margin-top: 235px;
    margin-left: 8px;
    margin-right: 8px;
`;
