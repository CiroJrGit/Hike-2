import styled, { css } from 'styled-components';

import { BiHome, BiUserCircle, RiRoadMapLine, CgFileDocument, BsSunFill, RiMoonClearFill, MdExitToApp } from '../../styles/icons';

export const Container = styled.header`
    display: none;

    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: sticky;
        top: 0;
        left: 0;
        padding: 0 5px 0 15px;
        height: 100vh;
        max-height: 100vh;
        overflow-y: auto;
    }

    @media (min-width: 1280px) {
        width: 290px;
        padding: 0 20px;
    }
`;

export const ContentTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
        margin-top: 70px;
    }

    @media (min-width: 1280px) {
        align-items: flex-start;
    }
`;

export const NavBar = styled.nav`
    > a {
        display: flex;
        text-decoration: none;

        :hover > div {
            color: ${props => props.theme.colors.text_hover};
            background-color: ${props => props.theme.colors.background_hover};
        }
    }

    @media (min-width: 1280px) {
        width: 100%;
    }
`;

export const NavItem = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin: 6px 0;
    padding: 8.25px;
    color: ${props => props.theme.colors.text};
    border-radius: 50px;
    outline: 0;
    transition: .3s;

    > span {
        display: none;
    }

    @media (min-width: 1280px) {
        padding: 10px 20px 12px 15px;

        > span {
            display: inline;
            margin-left: 21px;
            font-size: 1.24rem;
        }
    }

    /* :hover {
        color: ${props => props.theme.colors.text_hover};
        background-color: ${props => props.theme.colors.background_hover};
    } */
`;

export const ContentBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;

    > a {
        padding: 10px;
        width: 48px;
        height: 48px;
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        border-radius: 50px;
        transition: .3s;

        :hover {
            color: ${props => props.theme.colors.text_hover};
            background-color: ${props => props.theme.colors.background_hover};
        }

    }
    
    @media (min-width: 1280px) {
        flex-direction: row;
        justify-content: center;
        /* justify-content: space-between; */
        /* width: 85%; */
        width: 80%;
    }
`;

export const ToggleSwitch = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
`;

const iconCSS = css`
    flex-shrink: 0;
    width: 30px;
    height: 30px;
`;

export const HomeIcon = styled(BiHome)`
    ${iconCSS}
`;

export const RoadMapIcon = styled(RiRoadMapLine)`
    ${iconCSS}
`;

export const NotesIcon = styled(CgFileDocument)`
    ${iconCSS}
`;

export const ProfileIcon = styled(BiUserCircle)`
    ${iconCSS}
`;

export const ExitIcon = styled(MdExitToApp)`
    flex-shrink: 0;
    width: 27px;
    height: 27px;
`;

export const LightIcon = styled(BsSunFill)`
    flex-shrink: 0;
    display: none;

    @media (min-width: 1280px) {
        display: inline;
        width: 20px;
        height: 20px;
        margin-right: 15px;
    }
`;

export const DarkIcon = styled(RiMoonClearFill)`
    flex-shrink: 0;
    display: none;

    @media (min-width: 1280px) {
        display: inline;
        width: 21px;
        height: 21px;
        margin-left: 15px;
    }  
`;



