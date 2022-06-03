import React from 'react';
import { Container, ContentTop, NavBar, NavItem, HomeIcon, RoadMapIcon, NotesIcon, ProfileIcon, ContentBottom, ToggleSwitch, LightIcon, DarkIcon, ExitIcon } from './styles';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import Button from '../Button';
import Toggle from './Toggle';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
    return (
        <Container>
            <ContentTop>
                <Logo />

                <NavBar>
                    <Link to='/'>
                        <NavItem>
                            <HomeIcon />
                            <span>Página Inicial</span>
                        </NavItem>
                    </Link>

                    <Link to='/roadmap' >
                        <NavItem>
                            <RoadMapIcon />
                            <span>Roteiros</span>
                        </NavItem>
                    </Link>

                    {/* <Link to='/notes'>
                        <NavItem>
                            <NotesIcon />
                            <span>Anotações</span>
                        </NavItem>
                    </Link> */}

                    <Link to='/profile'>
                        <NavItem>
                            <ProfileIcon />
                            <span>Perfil</span>
                        </NavItem>
                    </Link>
                </NavBar>

                <Button />
            </ContentTop>

            <ContentBottom>
                {/* <UserMenu></UserMenu> */}
                
                <ToggleSwitch>
                    <LightIcon />
                    <Toggle  toggleTheme={toggleTheme} />
                    <DarkIcon />
                </ToggleSwitch>

                {/* <Link to='/login'>
                    <ExitIcon />
                </Link> */}
            </ContentBottom>
        </Container>
    );
}

export default Header;