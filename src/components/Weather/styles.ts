import styled from 'styled-components';

import { RiSearchLine } from '../../styles/icons';

export const Container = styled.div`
    position: fixed;
    top: 0;
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 58px;
    z-index: 2;
`;

export const SearchInput = styled.input`
    padding: 10px 50px 13px 40px;
    width: 50%;
    height: 44px;
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background_hover};
    border: 2px ${props => props.theme.colors.background_hover} solid;
    border-radius: 50px;
    transition: .2s;
    outline: 0;

    ::placeholder {
        color: #aaa;
    }

    :focus, :focus + svg {
        border-color: ${props => props.theme.colors.text_hover};
        fill: ${props => props.theme.colors.text_hover};
    }

    @media (min-width: 1280px) {
        padding: 10px 10px 13px 40px;
        width: 100%;
    }
`;

export const SearchIcon = styled(RiSearchLine)`
    position: relative;
    bottom: 0;
    left: 33px;
    width: 20px;
    height: 20px;

    right: 35px;
    fill: #aaa;
    z-index: 1;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    padding: 0 20px;
    color: ${props => props.theme.colors.text};
`;

export const Error = styled.div`
    font-size: 0.9rem;
`;

export const City = styled.div`
    margin-top: 10px;
    font-size: 1.4rem;
`;

export const Temp = styled.div`
    font-size: 2.5rem;
    font-weight: 500;
`;

export const Temp2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media (min-width: 1280px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

export const Sense = styled.div`
    margin: 5px 0;

    > p {
        font-size: 1.2rem;
    }

     span {
        margin-top: 5px;
        margin-right: 13px;
    }
`;

export const Min = styled.div`
    margin: 5px 0;

    > p {
        font-size: 1.2rem;
    }
    
     span {
        margin-top: 5px;
        margin-right: 13px;
    }
`;

export const Max = styled.div`
    margin: 5px 0;

    > p {
        font-size: 1.2rem;
    }
    
     span {
        margin-top: 5px;
        margin-right: 13px;
    }
`;