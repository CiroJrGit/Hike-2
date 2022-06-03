import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.background};
    transition: .3s;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1680px;
    height: 100%;
`;