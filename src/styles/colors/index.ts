import IColorsConfig from './types';
import { AppTheme } from '@components/AppThemeProvider/types';

const commonColors = {
  error: '#b91c1c',
  errorLight: '#fee2e2',
  success: '#16a34a',
  successLight: '#dcfce7',
  warning: '#eab308',
  warningLight: '#fef9c3',
  dark: '#000000',
};

const darkThemeColors: IColorsConfig = {
  primary: '#FFD700',
  primaryDark: '#B8860B',
  backgroundColor: '#000000',
  textPrimaryColor: '#ffffff',
  textSecondaryColor: '#E2E8F0',
  textTertiaryColor: '#94A3B8',
  borderColor: '#ffffff1a',
  inActiveColor: '#64748B',
  backgroundColorLight: '#1A1A1A',
  ...commonColors,
};

const lightThemeColors: IColorsConfig = {
  primary: '#FFD700',
  primaryDark: '#B8860B',
  backgroundColor: '#ffffff',
  textPrimaryColor: '#131521',
  textSecondaryColor: '#131521b3',
  textTertiaryColor: '#1315218c',
  borderColor: '#0000001a',
  inActiveColor: '#13152166',
  backgroundColorLight: '#f2f0f0',
  ...commonColors,
};

const getAppThemeColorsConfig = (theme: AppTheme): IColorsConfig => {
  switch (theme) {
    case 'dark':
      return { ...darkThemeColors };
    case 'light':
      return { ...lightThemeColors };
    default:
      return { ...darkThemeColors };
  }
};

export default getAppThemeColorsConfig;
