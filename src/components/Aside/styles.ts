import styled from 'styled-components';

export const Container = styled.div`
    display: none;
    width: 136px;

    @media (min-width: 1000px) {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 1280px) {
        width: 300px;
    }
`;

