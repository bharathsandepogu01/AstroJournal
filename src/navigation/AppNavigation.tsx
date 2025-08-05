import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppStackNavigation from './AppStackNavigation';
import useAppTheme from '@hooks/useAppTheme';

export default function AppNavigation() {
  const { appTheme, stylesConfig } = useAppTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        dark: appTheme === 'dark',
        colors: {
          ...DefaultTheme.colors,
          background: stylesConfig.backgroundColor,
          primary: stylesConfig.primary,
          text: stylesConfig.textPrimaryColor,
        },
      }}
    >
      <AppStackNavigation />
    </NavigationContainer>
  );
}
