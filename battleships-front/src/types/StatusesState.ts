import { Status } from '.';

export interface StatusesState {
  readonly loginUser: Status;
  readonly addUser: Status;
  readonly getResults: Status;
  readonly getResultsByUser: Status;
  readonly addResult: Status;
  readonly [key: string]: Status;
}
