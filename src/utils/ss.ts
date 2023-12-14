import { UNIQUE_PREFIX } from '../consts';

interface SessionStorage {
  set: Function;
  get: Function;
  remove: Function;
}

export const ss: SessionStorage = {
  set: <T = object>(key: string, value: T): void => {
    if (!sessionStorage) {
      return;
    }
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(UNIQUE_PREFIX + key, serializedValue);
    } catch (error) {
      throw new Error('store serialization failed');
    }
  },
  get: <T = object>(key: string): T | undefined => {
    if (!sessionStorage) {
      return;
    }

    try {
      const serializedValue = sessionStorage.getItem(UNIQUE_PREFIX + key);
      if (serializedValue == null) {
        return;
      }
      return JSON.parse(serializedValue);
    } catch (error) {
      throw new Error('store deserialization failed');
    }
  },
  remove: (key: string) => {
    try {
      sessionStorage.removeItem(UNIQUE_PREFIX + key);
    } catch (err) {
      throw new Error("couldn't remove sessionStorage item");
    }
  },
};
