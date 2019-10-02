import { History } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Store } from 'redux';
import { State } from '../types';
import Game from './Game';
import Ladder from './Ladder';
import Login from './Login';
import Profile from './Profile';
import { AppContainer, Menu, NavButton } from './Styled';

interface Props {
  store: Store<State>;
  history: History;
}

class App extends React.PureComponent<Props> {
  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <Router history={history}>
          <AppContainer>
            <Menu>
              <NavButton to="/profile">Profile</NavButton>
              <NavButton to="/ladder">Ladder</NavButton>
              <NavButton to="/game">Game</NavButton>
            </Menu>

            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/ladder" component={Ladder} />
              <Route path="/game" component={Game} />
              <Redirect exact from={`/`} to={'/login'} />
            </Switch>
          </AppContainer>
        </Router>
      </Provider>
    );
  }
}

export default App;
