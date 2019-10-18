import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { routes } from '../../helpers';
import { Menu, NavButton, PrimaryButton, Icon, HeaderContainer, FlexRow, Label } from '../Styled';
import { IoMdLogOut, IoMdPerson, IoIosList, IoIosBoat } from 'react-icons/io';
import { connect } from 'react-redux';
import { ThunkStateDispatch, State, User } from '../../types';
import { logoutUser } from '../../store/actions';

interface StateProps {
  currentUser?: User
}

interface DispatchProps {
  logout: () => void;
}

type AllProps = StateProps & DispatchProps & RouteComponentProps

const Header: React.SFC<AllProps> = ({ location, currentUser, logout }) => {
  if (location.pathname.includes(routes.login)) return null;

  return (
    <HeaderContainer>
      <div />
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
  currentUser: state.entities.currentUser,
});


const mapDispatchToProps = (dispatch: ThunkStateDispatch) => ({
  logout: () => dispatch(logoutUser())
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));


