import { fetcher } from '../helpers';
import { ApiRequestOptions, LocalStorageSelectors, Result } from '../types';

const resultsApiOptions: ApiRequestOptions = { key: 'results' };

export const getResultsApi = (): Promise<Result[]> =>
  fetcher.get(resultsApiOptions);

export const getResultsByUserApi = (userId: string): Promise<Result[]> => {
  const findResultByUserSelector: LocalStorageSelectors = {
    selector: (values: Result[]) => values.filter(x => x.userId === userId)
  };

  return fetcher.get(
    { ...resultsApiOptions, path: userId },
    findResultByUserSelector
  );
};

export const addResultApi = (result: Result): Promise<Result> =>
  fetcher.post({ ...resultsApiOptions, data: result });
