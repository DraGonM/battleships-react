import { Status } from '.';

export interface StatusesState {
  readonly login: Status;
  readonly getresults: Status;
  readonly getresultsbyuser: Status;
  readonly addresult: Status;
  readonly [key: string]: Status;
}
