const HOROSCOPE_QUERY_KEY = 'horoscope';

export const getHoroscopeCacheKey = (sign: string) =>
  `${HOROSCOPE_QUERY_KEY}-${sign}`;
export const getHoroscopeQueryKey = (sign: string) => [
  HOROSCOPE_QUERY_KEY,
  sign,
];
