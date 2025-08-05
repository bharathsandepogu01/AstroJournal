import { astroOpenApiInstance } from '@config/axios';
import { IHoroscopeApiResponse } from './types';
import { HOROSCOPE_MOCKS } from '@utils/mockData';

export async function getHoroscope(sign: string, day: string = 'today') {
  try {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('day', day);
    urlSearchParams.set('sign', sign);

    const response = await astroOpenApiInstance.post(
      `/horoscope?${urlSearchParams.toString()}`,
    );

    return response.data as IHoroscopeApiResponse;
  } catch (error) {
    console.warn('Failed to fetch horoscope from API, using mock data:', error);

    // Fallback to mock data
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve(HOROSCOPE_MOCKS[sign]);
      }, 500);
    });

    return response as IHoroscopeApiResponse;
  }
}
