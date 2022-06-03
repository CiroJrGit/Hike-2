import styled from 'styled-components';

export const Container = styled.button`
    display: block;
    padding: 11px 0;
    width: 55px;
    height: 55px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.03rem;
    color: #f8f8f8;
    background: linear-gradient(90deg, rgba(83,17,185,1) 0%, rgba(118,47,227,1) 35%, #9c5ad9 100%);
    border: none;
    border-radius: 50px;
    transition: .3s;
    cursor: pointer;

    > span {
        display: none;
        margin-bottom: 5px;
    }

    :hover {
        filter: brightness(1.2);
    }

    @media (min-width: 1280px) {
        width: 85%;
        height: auto;

        > span {
            display: inline-block;
        }
    }
`;