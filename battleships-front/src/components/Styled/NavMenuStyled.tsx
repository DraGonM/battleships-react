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

  margin-bottom: 1rem;
`;

export const NavButton = styled(NavLink)`
  &.active {
    background-color: #7ab9fe;
    border: 1px solid #000f95;
  }

  font-size: 150%;
  text-decoration: none;
  background-color: #ffffff;
  color: #252b30;
  padding: 0.7rem 1.5rem;
`;
