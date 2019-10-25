import * as React from 'react';
import { IoIosBoat, IoIosList, IoMdLogOut, IoMdPerson } from 'react-icons/io';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { routes } from '../../settings';
import { logoutUser } from '../../store/actions';
import { State, ThunkStateDispatch, User } from '../../types';
import {
  FlexRow,
  HeaderContainer,
  Icon,
  Label,
  Menu,
  NavButton,
  PrimaryButton
} from '../Styled';

interface StateProps {
  currentUser?: User;
}

interface DispatchProps {
  logout: () => void;
}

type AllProps = StateProps & DispatchProps & RouteComponentProps;

const Header: React.SFC<AllProps> = ({ location, currentUser, logout }) => {
  if (location.pathname.includes(routes.login)) return null;

  return (
    <HeaderContainer>
      <Menu>
        <NavButton to={routes.profile}>
          <Icon>
            <IoMdPerson />
          </Icon>
          Profile
        </NavButton>
        <NavButton to={routes.ladder}>
          <Icon>
            <IoIosList />
          </Icon>
          Ladder
        </NavButton>
        <NavButton to={routes.game}>
          <Icon>
            <IoIosBoat />
          </Icon>
          Game
        </NavButton>
      </Menu>
      <FlexRow>
        <Label>{currentUser && currentUser.name}</Label>
        <PrimaryButton onClick={logout}>
          <Icon>
            <IoMdLogOut />
          </Icon>
          Log out
        </PrimaryButton>
      </FlexRow>
    </HeaderContainer>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  currentUser: state.entities.currentUser
});

const mapDispatchToProps = (dispatch: ThunkStateDispatch) => ({
  logout: () => dispatch(logoutUser())
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
