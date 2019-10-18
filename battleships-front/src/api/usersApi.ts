import { fetcher } from '../helpers';
import { ApiRequestOptions, LocalStorageOptions, User } from '../types';

const usersApiOptions: ApiRequestOptions = { key: 'users' };

export const loginApi = (user: User): Promise<User | undefined> => {
  const loginStorageOptions: LocalStorageOptions = {
    selector: (values: User[]) =>
      values.find(x => x.name === user.name && x.pass === user.pass),
    rejectSelector: (values: User[]) => values.some(x => x.name === user.name),
    rejectMessage: 'Name already taken',
    createNewIfNull: true
  };

  return fetcher.get({ ...usersApiOptions, data: user }, loginStorageOptions);
};
