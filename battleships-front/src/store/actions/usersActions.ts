import { AnyAction } from 'redux';
import { loginApi } from '../../api';
import { AsyncTypes, User } from '../../types';
import { makeAsyncAction, makeAsyncTypes } from './actionsHelpers';

export const loginTypes: AsyncTypes = makeAsyncTypes('LOGIN');
const loginAction = makeAsyncAction(loginTypes, loginApi);
export const loginUser = (user: User) => loginAction(user);

export const LOGOUT = 'LOGOUT';
export const logout = (): AnyAction => ({
  type: LOGOUT
});
