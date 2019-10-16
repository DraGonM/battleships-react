import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Menu, NavButton } from '../Styled';

const NavMenu: React.SFC<RouteComponentProps> = ({ location }) => {
  if (location.pathname.includes('login'))
    return null;
    
  return <Menu>
    <NavButton to="/profile">Profile</NavButton>
    <NavButton to="/ladder">Ladder</NavButton>
    <NavButton to="/game">Game</NavButton>
  </Menu>;
};

export default withRouter(NavMenu);
