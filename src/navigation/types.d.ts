import { SCREEN_NAMES } from '@utils/constants';

export type AppStackParamList = {
  [SCREEN_NAMES.HOME]: undefined;
  [SCREEN_NAMES.JOURNAL]: undefined;
  [SCREEN_NAMES.HOROSCOPE_DETAILS]: {
    sign: string;
  };
};

export type AppStackNavigationProp =
  NativeStackNavigationProp<AppStackParamList>;

export type HoroscopeDetailsScreenRouteProp = RouteProp<
  AppStackParamList,
  SCREEN_NAMES.HOROSCOPE_DETAILS
>;
