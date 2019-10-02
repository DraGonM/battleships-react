import { addResultApi, getResultsApi, getResultsByUserApi } from '../../api';
import { AsyncTypes, Result, User } from '../../types';
import { makeAsyncAction, makeAsyncTypes } from './actionsHelpers';

export const getResultsTypes: AsyncTypes = makeAsyncTypes('GET_RESULTS');
const getResultsAction = makeAsyncAction(getResultsTypes, getResultsApi);
export const getResults = () => getResultsAction();

export const getResultsByUserTypes: AsyncTypes = makeAsyncTypes(
  'GET_RESULTS_BY_USER'
);
const getResultsByUserAction = makeAsyncAction(
  getResultsByUserTypes,
  getResultsByUserApi
);
export const getResultsByUser = (user: User) => getResultsByUserAction(user);

export const addResultTypes: AsyncTypes = makeAsyncTypes('ADD_RESULT');
const addResultAction = makeAsyncAction(addResultTypes, addResultApi);
export const addResult = (result: Result) => addResultAction(result);
