import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { State } from '../types';
import createRootReducer from './reducers';

export default function configureStore(): Store<State> {
  const initialState = {};

  const store = createStore(
    createRootReducer,
    initialState,
    compose(applyMiddleware(thunkMiddleware))
  );

  return store;
}
