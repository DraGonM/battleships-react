import * as queryString from 'query-string';
import { ApiRequestOptions, LocalStorageOptions } from '../types';
import { storager } from './localStorage';

const config: string =
  process.env.CONFIG_ENV === 'production'
    ? 'localhost:57777/api'
    : 'localhost:57777/api';

const useLocalStorage: boolean = process.env.STORAGE === 'localstorage';

function handleErrors(response: Response) {
  if (response.ok) return response;

  throw new Error(`[${response.status}] ${response.statusText}`);
}

export const fetcher = {
  get: (options: ApiRequestOptions, selectors?: LocalStorageOptions) => {
    const { key, path, data } = options;

    if (useLocalStorage) return storager.getPromisified(key, data, selectors);

    let fullPath = `${config}/${key}`;

    if (path) fullPath += `/${path}`;
    if (data) fullPath += `?${queryString.stringify(data)}`;

    return fetch(fullPath, {
      credentials: 'include'
    })
      .then(handleErrors)
      .then(response => response.json());
  },

  post: (options: ApiRequestOptions, selectors?: LocalStorageOptions) => {
    const { key, data } = options;

    if (useLocalStorage) return storager.setPromisified(key, data, selectors);

    return fetch(`${config}/${key}`, {
      body: JSON.stringify(data),
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }),
      method: 'POST'
    })
      .then(response => handleErrors(response))
      .then(response => response.json());
  },

  put: (options: ApiRequestOptions) => {
    const { key, data } = options;

    return fetch(`${config}/${key}`, {
      body: JSON.stringify(data),
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }),
      method: 'PUT'
    })
      .then(handleErrors)
      .then(response => response.json());
  },

  delete: (options: ApiRequestOptions) => {
    const { key, data } = options;

    return fetch(`${config}/${key}`, {
      body: JSON.stringify(data),
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }),
      method: 'DELETE'
    })
      .then(handleErrors)
      .then(response => response.json());
  }
};
