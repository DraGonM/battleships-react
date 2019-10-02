import { createBrowserHistory, History } from 'history';
import * as React from 'react';
import { render } from 'react-dom';
import Root from './components/App';
import configureStore from './store/configure.store';
import './styles/index.css';

const history: History = createBrowserHistory();
const store = configureStore();
const rootElement = document.getElementById('root');

render(<Root store={store} history={history} />, rootElement);
