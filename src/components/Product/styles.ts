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
    }

    .text-content {
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

`;