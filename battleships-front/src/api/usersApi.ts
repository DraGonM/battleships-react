import { fetcher, storager } from '../helpers';
import { ApiRequestOptions, LocalStorageSelectors, User } from '../types';

const usersApiOptions: ApiRequestOptions = { key: 'users' };

export const loginUserApi = (user: User): Promise<User | undefined> => {
  const findUserSelector: LocalStorageSelectors = {
    selector: (values: User[]) =>
      values.find(x => x.name === user.name && x.pass === user.pass)
  };

  setCurrentUser(user);

  return fetcher.get({ ...usersApiOptions, data: user }, findUserSelector);
};

export const addUserApi = (user: User): Promise<User> => {
  const alreadyHasUserNameSelector: LocalStorageSelectors = {
    rejectSelector: (values: User[]) => values.some(x => x.name === user.name),
    rejectMessage: 'Name already taken'
  };

  setCurrentUser(user);

  return fetcher.post(
    { ...usersApiOptions, data: user },
    alreadyHasUserNameSelector
  );
};

// TODO decide how to persist user session, encryption etc..
const setCurrentUser = (user: User) => storager.set('currentUser', user);
