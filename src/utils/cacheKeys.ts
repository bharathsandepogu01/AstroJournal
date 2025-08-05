const HOROSCOPE_QUERY_KEY = 'horoscope';
const JOURNAL_CACHE_KEY = 'journal';

export const getHoroscopeCacheKey = (sign: string) =>
  `${HOROSCOPE_QUERY_KEY}-${sign}`;
export const getHoroscopeQueryKey = (sign: string) => [
  HOROSCOPE_QUERY_KEY,
  sign,
];
export const getJournalCacheKey = () => JOURNAL_CACHE_KEY;
