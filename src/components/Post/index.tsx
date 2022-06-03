import React, { useState } from 'react';

import { Container, Content, PostData, UserData, Avatar, AvatarImage, UserName, Follow, PostLocation, Description, ImageContent, ImagePost, Icons, Status, Like, Coment, LikeIcon, ComentIcon } from './styles';

// import Avatar from '../Avatar';
// import ImageContent from '../ImageContent';

interface Props {
    imageAvatar: string;
    user: string;
    local: string;
    desc: string;
    imagePost: string;

    likeCount: number;
}

const Post: React.FC<Props> = ({ imageAvatar, user, local, desc, imagePost, likeCount }) => {
    const [like, setLike] = useState(false);
    const [follow, setFollow] = useState(false);

    return (
        <Container>
            <Content>
                <PostData>
                    <UserData>
                        <Avatar>
                            <AvatarImage src={imageAvatar} alt='' />
                        </Avatar>
                        <UserName>{user}</UserName>
                        <Follow onClick={() => setFollow(!follow)}>
                            <span>{follow ? 'Deixar de seguir' : 'Seguir'}</span>
                        </Follow>
                    </UserData>
                    <PostLocation>{local}</PostLocation>
                </PostData>

                <Description>{desc}</Description>
                <ImageContent>
                    <ImagePost src={imagePost} alt='Foto de Postagem Hike' /> {/* Criar Componentes separados */}
                </ImageContent>

                <Icons>
                    <Status>
                        <Like onClick={() => setLike(!like)}>
                            <span className="front">
                                <LikeIcon />
                            </span>
                        </Like>
                        <span>{like ? likeCount : ++likeCount}</span>
                    </Status>

                    <Status>
                        <Coment disabled>
                            <span className="front">
                                <ComentIcon />
                            </span>
                        </Coment>
                        <span></span>
                    </Status>
                </Icons>
            </Content>
        </Container>
    );
}

export default Post;