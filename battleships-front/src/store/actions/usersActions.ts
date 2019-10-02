import { addUserApi, loginUserApi } from '../../api';
import { AsyncTypes, User } from '../../types';
import { makeAsyncAction, makeAsyncTypes } from './actionsHelpers';

export const loginUserTypes: AsyncTypes = makeAsyncTypes('LOGIN_USER');
const loginUserAction = makeAsyncAction(loginUserTypes, loginUserApi);
export const loginUser = (user: User) => loginUserAction(user);

export const addUserTypes: AsyncTypes = makeAsyncTypes('ADD_USER');
const addGameAction = makeAsyncAction(addUserTypes, addUserApi);
export const addUser = (user: User) => addGameAction(user);
