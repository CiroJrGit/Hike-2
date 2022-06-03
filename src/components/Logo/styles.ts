import styled from 'styled-components';

import { RiSendPlaneFill } from '../../styles/icons';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 73%;
    height: 58px;
    
    > a {
        color: ${props => props.theme.colors.text_hover};
        font-size: 1.1rem;
        text-decoration: none;
        /* transition: .3s; */
        
        > h1 {
            display: none;
        }
        
        @media (min-width: 1280px) {
            display: flex;
            align-items: center;

            > h1 {
                display: block;
            }
        }
    }
`;

export const LogoIcon = styled(RiSendPlaneFill)`
    width: 33px;
    height: 33px;
`;


// display: flex;
//     flex-direction: column;
//     align-items: center;

//     > button {
//         margin-top: 100px;
//     }

    