// import { astroOpenApiInstance } from '@config/axios';
import { IHoroscopeApiResponse } from './types';
import { HOROSCOPE_MOCKS } from '@utils/mockData';

export async function getHoroscope(sign: string) {
  // const urlSearchParams = new URLSearchParams();
  // urlSearchParams.set('day', day);
  // urlSearchParams.set('sign', sign);

  // const response = await astroOpenApiInstance.post(
  //   `/horoscope?${urlSearchParams.toString()}`,
  // );

  const response = await new Promise(resolve => {
    setTimeout(() => {
      resolve(HOROSCOPE_MOCKS[sign]);
    }, 1000);
  });

  return response as IHoroscopeApiResponse;
}
