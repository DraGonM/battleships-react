import { StatusesState } from '../../types';
import { asyncSuffixes } from '../actions/actionsHelpers';

export default (
  state: StatusesState = {
    login: { isRunning: false },
    getresults: { isRunning: false },
    getresultsbyuser: { isRunning: false },
    addresult: { isRunning: false }
  },
  action: any
) => {
  const { type, statusKey } = action;

  if (type.indexOf(asyncSuffixes.request) !== -1) {
    return {
      ...state,
      [statusKey]: {
        error: undefined,
        isRunning: true
      }
    };
  }

  if (type.indexOf(asyncSuffixes.success) !== -1) {
    return {
      ...state,
      [statusKey]: {
        error: undefined,
        isRunning: false,
        lastUpdated: action.lastUpdated
      }
    };
  }

  if (type.indexOf(asyncSuffixes.failure) !== -1) {
    return {
      ...state,
      [statusKey]: {
        error: action.error,
        isRunning: false,
        lastUpdated: undefined
      }
    };
  }

  return state;
};
