import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export function setItem<T>(key: string, value: T): void {
  const toStore = typeof value === 'string' ? value : JSON.stringify(value);
  storage.set(key, toStore);
}

export function getItem<T>(key: string): T | null {
  const storedValue = storage.getString(key);
  if (storedValue === undefined || storedValue === null) return null;

  try {
    return JSON.parse(storedValue) as T;
  } catch {
    return storedValue as unknown as T;
  }
}

export function removeItem(key: string): void {
  storage.delete(key);
}

export function hasItem(key: string): boolean {
  return storage.contains(key);
}

export function clearStorage(): void {
  storage.clearAll();
}
