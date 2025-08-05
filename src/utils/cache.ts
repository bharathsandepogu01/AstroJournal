import { isSameDay } from './date';
import { mmkvStorage } from './storage';

interface ICacheData<T> {
  timestamp: number;
  data: T;
}

export function setCache<T>(cacheKey: string, data: T) {
  const timestamp = Date.now();
  const dataWithTimestamp: ICacheData<T> = { data, timestamp };
  mmkvStorage.setItem(cacheKey, dataWithTimestamp);
}

export function getCache<T>(cacheKey: string): T | null {
  const data = mmkvStorage.getItem<ICacheData<T>>(cacheKey);

  if (!data) return null;

  const { timestamp } = data;

  if (!isSameDay(timestamp, Date.now())) {
    clearCache(cacheKey);
    return null;
  }

  return data.data;
}

export function clearCache(cacheKey: string) {
  mmkvStorage.removeItem(cacheKey);
}
