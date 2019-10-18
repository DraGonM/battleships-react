import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { State } from './';

export type ThunkStateDispatch = ThunkDispatch<State, any, AnyAction>;
