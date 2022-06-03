import styled from 'styled-components';

export const Container = styled.div``;

export const TopBar = styled.div`
    position: sticky;
    top: 0;
    height: 53px;
    background: ${props => props.theme.colors.glass_bar};
    backdrop-filter: blur(5.1px);
    -webkit-backdrop-filter: blur(5.1px);
    transition: .3s;
    z-index: 2;
`;