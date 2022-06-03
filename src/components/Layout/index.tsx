import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Wrapper } from './styles';

import Header from '../Header';
import Main from '../Main';
import Aside from '../Aside';

interface Props {
    toggleTheme(): void;
}

const Layout: React.FC<Props> = ({toggleTheme}) => {
  return (
    <Container>
        <Wrapper>

          <Router>
            <Header toggleTheme={toggleTheme} />
            <Main />
            <Aside />
          </Router>
          
        </Wrapper>
    </Container>
  );
}

export default Layout;