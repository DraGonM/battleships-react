import { fetcher } from '../helpers';
import { ApiRequestOptions, LocalStorageSelectors, User } from '../types';

const usersApiOptions: ApiRequestOptions = { key: 'users' };

export const loginUserApi = (user: User): Promise<User | undefined> => {
  const findUserSelector: LocalStorageSelectors = {
    selector: (values: User[]) =>
      values.find(x => x.name === user.name && x.pass === user.pass)
  };

  return fetcher.get({ ...usersApiOptions, data: user }, findUserSelector);
};

export const addUserApi = (user: User): Promise<User> => {
  const alreadyHasUserNameSelector: LocalStorageSelectors = {
    rejectSelector: (values: User[]) => values.some(x => x.name === user.name),
    rejectMessage: 'Name already taken'
  };

  return fetcher.post(
    { ...usersApiOptions, data: user },
    alreadyHasUserNameSelector
  );
};
