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

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;

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

    .itemsContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px;
        gap: 20px;

        width: 345px;
        height: 56px;

        border: 1px solid rgba(204, 204, 204, 0.3);
        border-radius: 8px;
    }
`;
