import styled from 'styled-components';

import {BiLike, BsChat } from '../../styles/icons';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 10px 30px;
    padding-top: 10px;
    max-width: 100%;
    border: 1px ${props => props.theme.colors.background_hover} solid;
    border-radius: 10px;
    transition: .3s;
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const PostData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 50px;
`;

export const UserData = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 50px;
    height: 50px;
    background: #ccc;
    border-radius: 50%;
    flex-shrink: 0;

    overflow: hidden;
`;

export const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const UserName = styled.span`
    margin-left: 10px;
    
    /* white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden; */
`;

export const Follow = styled.button`
    margin-left: 10px;
    padding: 6px 15px 8px;
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.text_hover};
    border: 2px ${props => props.theme.colors.text_hover} solid;
    border-radius: 25px;
    transition: .3s;
    cursor: pointer;

    :hover {
        background-color: ${props => props.theme.colors.background_hover};
    }
`;

export const PostLocation = styled.span`
    margin-left: 10px;
    color: ${props => props.theme.colors.text_hover};
    font-size: 1.1rem;
    font-weight: 500;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const Description = styled.p`
    font-size: 1rem;
    margin-top: 9px;
    padding: 0 15px;
`;

export const ImageContent = styled.div`
    margin-top: 12px;
    width: 100%;
    height: min(480px, max(275px, 41vw));
    overflow: hidden;
    cursor: pointer;
    transition: .3s;

    :hover {
        opacity: .7;
    }
`;

export const ImagePost = styled.img`
    width: 100%;
    /* height: 100%; */
    object-fit: cover;
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 15px 0;
`;

export const Status = styled.div`
    display: flex;
    align-items: center;
    margin-right: 25px;
    margin-left: 15px;
    cursor: pointer;

    > span {
        font-size: 1.2rem;
        transition: .15s;
        user-select: none;
    }


    > button {
        background: ${props => props.theme.colors.like_base};
        border: none;
        border-radius: 15px;
        padding: 0;
        margin-right: 7px;
        cursor: pointer;
        
        .front {
            display: block;
            padding: 5px 7px 3px 7px;
            border-radius: 15px;
            font-size: 1.3rem;
            background: ${props => props.theme.colors.like};
            color: white;
            transform: translateY(-4px);

            transition:
                transform
                600ms
                cubic-bezier(.3, .7, .4, 1);
        }

        :active .front {
            transform: translateY(-2px);
        }

        :focus:not(:focus-visible) {
            outline: none;
        }  

        :hover .front {
            transform: translateY(-6px);
            transition:
            transform
            250ms
            cubic-bezier(.3, .7, .4, 1.5);
        }

        :active .front {
            transform: translateY(-2px);
            transition: transform 34ms;
        }

        :disabled {
            opacity: 0.7;

            :hover .front {
                transform: translateY(-4px);
                transition:
                transform
                0ms
                cubic-bezier();
            }
        }
    }
`;

export const Like = styled.button``;

export const Coment = styled.button``;

export const LikeIcon = styled(BiLike)``;

export const ComentIcon = styled(BsChat)`
    width: 20px;
    height: 20px;
`;
