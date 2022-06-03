import React from 'react';
import Weather from '../Weather';

import { Container, } from './styles';

const Aside: React.FC = () => {
  return (
      <Container>
        <Weather />
      </Container>
  );
}

export default Aside;