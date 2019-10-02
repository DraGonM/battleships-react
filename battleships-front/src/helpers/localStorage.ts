import { LocalStorageSelectors } from '../types';

export const storager = {
  get: (key: string): any => {
    const value = localStorage.getItem(key);
    return value && value !== 'undefined' && JSON.parse(value);
  },
  getPromisified: (
    key: string,
    selectors: LocalStorageSelectors = {}
  ): Promise<any> => {
    const values: any[] = storager.get(key);
    const { selector, rejectSelector, rejectMessage } = selectors;

    if (rejectSelector && rejectSelector(values))
      return Promise.reject(rejectMessage);

    return Promise.resolve(values && selector ? selector(values) : values);
  },
  set: (key: string, value: any): void => {
    const valueToSave = !value ? null : value;
    localStorage.setItem(key, JSON.stringify(valueToSave));
  },
  setPromisified: (
    key: string,
    value: any,
    selectors: LocalStorageSelectors = {}
  ): Promise<any> => {
    const values: any[] = storager.get(key);
    const { rejectSelector, rejectMessage } = selectors;

    if (rejectSelector && rejectSelector(values))
      return Promise.reject(rejectMessage);

    value = { ...value, id: values ? values.length : 0 };
    storager.set(key, values ? [...values, value] : [value]);
    return Promise.resolve(value);
  },
  remove: (key: string): void => localStorage.removeItem(key),
  clear: () => localStorage.clear()
};
