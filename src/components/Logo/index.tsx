import React from 'react';

import { Container, LogoIcon } from './styles';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
        <Container>
            <Link to='/'>
                <LogoIcon />
                <h1>Hike</h1>
            </Link>
      </Container>
  );
}

export default Logo;