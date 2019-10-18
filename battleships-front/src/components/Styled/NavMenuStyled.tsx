import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  flex-direction: row;

  a:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  a:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;

export const NavButton = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &.active {
    filter: brightness(90%);
    border: 1px solid ${props => props.theme.colors.darkPrimary};
  }

  &:hover {
    filter: brightness(90%);
  }

  color: ${props => props.theme.colors.inputFont};
  background-color: ${props => props.theme.colors.input};
  border: 1px solid transparent;
  padding: 0.6rem 1rem;
  text-decoration: none;
`;
