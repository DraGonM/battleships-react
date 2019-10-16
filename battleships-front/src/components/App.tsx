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
import { FlexColumnCenter, theme, GlobalStyle } from './Styled';
import { ThemeProvider } from 'styled-components';
import NavMenu from './Common/NavMenu'

interface Props {
  store: Store<State>;
  history: History;
}

class App extends React.PureComponent<Props> {
  render() {
    const { store, history } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router history={history}>
            <FlexColumnCenter>
              <GlobalStyle />
              <NavMenu />
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/ladder" component={Ladder} />
                <Route path="/game" component={Game} />
                <Redirect exact from={`/`} to={'/login'} />
              </Switch>
            </FlexColumnCenter>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;


