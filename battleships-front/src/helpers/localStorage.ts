import { LocalStorageOptions } from '../types';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const storager = {
  get: (key: string): any => {
    const value = localStorage.getItem(key);
    return value && value !== 'undefined' && JSON.parse(value);
  },
  getPromisified: async (
    key: string,
    value: any,
    selectors: LocalStorageOptions = {}
  ): Promise<any> => {
    const { selector, createNewIfNull } = selectors;
    const values: any[] = storager.get(key);
    const result = values && selector ? selector(values) : values;

    await sleep(1000);

    if (createNewIfNull && !result)
      return storager.setPromisified(key, value, selectors);

    return Promise.resolve(result);
  },
  set: (key: string, value: any): void => {
    const valueToSave = !value ? null : value;
    localStorage.setItem(key, JSON.stringify(valueToSave));
  },
  setPromisified: async (
    key: string,
    value: any,
    selectors: LocalStorageOptions = {}
  ): Promise<any> => {
    const { rejectSelector, rejectMessage } = selectors;
    const values: any[] = storager.get(key);

    await sleep(1000);
    
    if (values && rejectSelector && rejectSelector(values))
      return Promise.reject(rejectMessage);

    value = { ...value, id: values ? values.length : 0 };
    storager.set(key, values ? [...values, value] : [value]);
    return Promise.resolve(value);
  },
  remove: (key: string): void => localStorage.removeItem(key),
  clear: () => localStorage.clear()
};
