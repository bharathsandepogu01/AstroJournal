import IColorsConfig from '@styles/types';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function getHoroscopeDetailsThemeStyles(
  colorsConfig: IColorsConfig,
) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    errorText: {
      color: colorsConfig.error,
      fontSize: 16,
      textAlign: 'center',
      marginTop: height * 0.3,
      fontWeight: 'bold',
    },
    loadingText: {
      color: colorsConfig.textPrimaryColor,
      fontSize: 16,
      textAlign: 'center',
      marginTop: height * 0.3,
      fontWeight: 'bold',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colorsConfig.backgroundColor,
      paddingVertical: 16,
      paddingHorizontal: 12,
    },
    backButton: {
      marginRight: 12,
    },
    contentContainer: {
      paddingBottom: 40,
      paddingTop: 16,
      paddingHorizontal: 16,
    },
    emoji: {
      fontSize: 100,
      marginHorizontal: 'auto',
    },
    card: {
      width: width * 0.9,
      marginHorizontal: 'auto',
      backgroundColor: colorsConfig.textPrimaryColor,
      borderRadius: 12,
      padding: 16,
      marginTop: 16,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colorsConfig.textPrimaryColor,
      textAlign: 'center',
      marginTop: 16,
    },
    dateRange: {
      textAlign: 'center',
      color: colorsConfig.textTertiaryColor,
      fontSize: 16,
      marginBottom: 20,
    },
    paragraph: {
      color: colorsConfig.backgroundColorLight,
      fontSize: 15,
      marginBottom: 12,
      lineHeight: 22,
    },
  });
}
