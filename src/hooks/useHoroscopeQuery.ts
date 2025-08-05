import { getHoroscope } from '@services/horoscope';
import { IHoroscopeApiResponse } from '@services/horoscope/types';
import { useQuery } from '@tanstack/react-query';
import { getCache, setCache } from '@utils/cache';
import { getHoroscopeCacheKey, getHoroscopeQueryKey } from '@utils/cacheKeys';

export default function useHoroscopeQuery(sign: string) {
  return useQuery({
    queryKey: getHoroscopeQueryKey(sign),
    queryFn: async () => {
      const cachedData = getCache<IHoroscopeApiResponse>(
        getHoroscopeCacheKey(sign),
      );
      if (cachedData) return cachedData;
      const response = await getHoroscope(sign);
      setCache(getHoroscopeCacheKey(sign), response);
      return response;
    },
    enabled: !!sign,
    staleTime: 0,
    gcTime: 0,
  });
}
