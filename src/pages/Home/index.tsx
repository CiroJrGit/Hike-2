import React from 'react';
import { Container, TopBar } from './styles';

import Feed from '../../components/Feed'

const Home: React.FC = () => {
    return (
        <Container>
            <TopBar />
            <Feed />
        </Container>
    );
}

export default Home;