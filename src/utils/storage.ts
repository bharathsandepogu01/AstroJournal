import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const mmkvStorage = {
  setItem: function setItem<T>(key: string, value: T): void {
    const toStore = typeof value === 'string' ? value : JSON.stringify(value);
    storage.set(key, toStore);
  },
  getItem: function getItem<T>(key: string): T | null {
    const storedValue = storage.getString(key);
    if (storedValue === undefined || storedValue === null) return null;

    try {
      return JSON.parse(storedValue) as T;
    } catch {
      return storedValue as unknown as T;
    }
  },
  removeItem: function removeItem(key: string): void {
    storage.delete(key);
  },
  hasItem: function hasItem(key: string): boolean {
    return storage.contains(key);
  },
  clearStorage: function clearStorage(): void {
    storage.clearAll();
  },
};
