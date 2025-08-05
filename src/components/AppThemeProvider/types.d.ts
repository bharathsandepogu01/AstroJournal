import { PropsWithChildren } from 'react';
import IColorsConfig from '@styles/types';

export type AppTheme = 'dark' | 'light' | null;

export interface IAppThemeProviderProps extends PropsWithChildren {}

export interface IAppThemeContext {
  appTheme: AppTheme;
  setAppTheme: (appTheme: AppTheme) => void;
  stylesConfig: IColorsConfig;
}
