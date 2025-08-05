import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { StatusBar } from 'react-native';
import { useColorScheme } from 'react-native';
import { DEFAULT_APP_THEME, USER_APP_THEME_PREFERENCE } from '@utils/constants';
import { IAppThemeProviderProps, AppTheme, IAppThemeContext } from './types';
import getAppThemeColorsConfig from '@styles/colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { getItem, setItem } from '@utils/storage';

export const AppThemeContext = createContext<IAppThemeContext>({
  appTheme: DEFAULT_APP_THEME,
  setAppTheme: () => {},
  stylesConfig: getAppThemeColorsConfig(DEFAULT_APP_THEME),
});

export default function AppThemeProvider(props: IAppThemeProviderProps) {
  const [appTheme, setAppTheme] = useState<AppTheme>(DEFAULT_APP_THEME);
  const systemColorScheme = useColorScheme();

  useEffect(() => {
    function checkUserPreferenceColorScheme() {
      const userAppThemePreference = getItem<AppTheme>(
        USER_APP_THEME_PREFERENCE,
      );
      if (userAppThemePreference) {
        setAppTheme(userAppThemePreference);
      } else {
        setAppTheme(systemColorScheme ?? DEFAULT_APP_THEME);
      }
    }
    checkUserPreferenceColorScheme();
  }, [systemColorScheme]);

  const handleSetAppTheme = useCallback((theme: AppTheme) => {
    setAppTheme(theme);
    setItem(USER_APP_THEME_PREFERENCE, theme);
  }, []);

  const value: IAppThemeContext = useMemo(
    () => ({
      appTheme,
      setAppTheme: handleSetAppTheme,
      stylesConfig: getAppThemeColorsConfig(appTheme),
    }),
    [appTheme, handleSetAppTheme],
  );

  const statusBarStyle = useMemo(() => {
    return appTheme === 'dark' ? 'light-content' : 'dark-content';
  }, [appTheme]);

  const safeAreaViewStyle = useMemo(() => {
    return {
      flex: 1,
      backgroundColor: value.stylesConfig.backgroundColor,
    };
  }, [value.stylesConfig.backgroundColor]);

  return (
    <AppThemeContext.Provider value={value}>
      <StatusBar
        backgroundColor={value.stylesConfig.backgroundColor}
        barStyle={statusBarStyle}
      />
      <SafeAreaProvider>
        <SafeAreaView style={safeAreaViewStyle}>{props.children}</SafeAreaView>
      </SafeAreaProvider>
    </AppThemeContext.Provider>
  );
}
