import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Container } from './styles';

import Home from '../../pages/Home';
import Roadmap from '../../pages/Roadmap';
import Notes from '../../pages/Notes';
import Profile from '../../pages/Profile';
// import Login from '../../pages/Login';


const Main: React.FC = () => {
  
  
  return (
    <Container>
          <Switch>
              <Route exact path='/'>
                <Home />
              </Route>

              <Route path='/roadmap'>
                <Roadmap />
              </Route>

              <Route path='/notes'>
                <Notes />
              </Route>

              <Route path='/profile'>
                <Profile />
              </Route>
          </Switch>
    </Container>

    // <BottomMenu></BottomMenu>
  );
}

export default Main;