import { Result, User } from '.';

export interface Entities {
  readonly currentUser?: User;
  readonly users: { [key: string]: User };
  readonly results: { [key: string]: Result };
}
