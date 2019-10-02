import { History } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Link, Redirect, Route, Router, Switch } from 'react-router-dom';
import { Store } from 'redux';
import { State } from '../types';
import Game from './Game';
import Ladder from './Ladder';
import Login from './Login';
import Profile from './Profile';

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
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/ladder">Ladder</Link>
                </li>
                <li>
                  <Link to="/game">Game</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/ladder" component={Ladder} />
              <Route path="/game" component={Game} />
              <Redirect exact from={`/`} to={'/login'} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
