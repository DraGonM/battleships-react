import { History } from 'history';
import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { Redirect, Router, Switch } from 'react-router-dom';
import { Store } from 'redux';
import { ThemeProvider } from 'styled-components';
import { routes, storager } from '../helpers';
import { loginUser } from '../store/actions';
import { State, Status, ThunkStateDispatch, User } from '../types';
import Header from './Common/Header';
import PrivateRoute from './Common/PrivateRoute';
import StatusLoader from './Common/StatusLoader';
import Game from './Game';
import Ladder from './Ladder';
import Login from './Login';
import Profile from './Profile';
import { GlobalStyle, theme } from './Styled';

interface Props {
  store: Store<State>;
  history: History;
}

interface StateProps {
  currentUser?: User;
  loginStatus: Status;
}

interface DispatchProps {
  login: (user: User) => void;
}

type AllProps = Props & StateProps & DispatchProps;

class App extends React.PureComponent<AllProps> {
  componentDidMount() {
    const { login } = this.props;

    // TODO decide how to persist user session, encryption etc..
    const storageUser: User | undefined = storager.get('currentUser');

    if (storageUser && storageUser.name && storageUser.pass) login(storageUser);
  }

  render() {
    const { store, history, loginStatus, currentUser } = this.props;

    const isLoggedIn = !!currentUser;

    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router history={history}>
            <StatusLoader status={loginStatus}>
              <>
                <GlobalStyle />
                <Header />
                <Switch>
                  <PrivateRoute
                    path={routes.login}
                    redirectTo={routes.game}
                    redirectIf={isLoggedIn}
                    component={Login}
                  />
                  <PrivateRoute
                    path={routes.profile}
                    redirectTo={routes.login}
                    redirectIf={!isLoggedIn}
                    component={Profile}
                  />
                  <PrivateRoute
                    path={routes.ladder}
                    redirectTo={routes.login}
                    redirectIf={!isLoggedIn}
                    component={Ladder}
                  />
                  <PrivateRoute
                    path={routes.game}
                    redirectTo={routes.login}
                    redirectIf={!isLoggedIn}
                    component={Game}
                  />
                  <Redirect
                    exact
                    from={`/`}
                    to={currentUser ? routes.game : routes.login}
                  />
                </Switch>
              </>
            </StatusLoader>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  currentUser: state.entities.currentUser,
  loginStatus: state.statuses.login
});

const mapDispatchToProps = (dispatch: ThunkStateDispatch) => ({
  login: (user: User) => dispatch(loginUser(user))
});

export default connect<StateProps, DispatchProps, Props>(
  mapStateToProps,
  mapDispatchToProps
)(App);
