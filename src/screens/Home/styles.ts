import IColorsConfig from '@styles/types';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function getHomeThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorsConfig.backgroundColor,
    },
    starsContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    star: {
      position: 'absolute',
      width: 2,
      height: 2,
      backgroundColor: colorsConfig.primaryDark,
      borderRadius: 1,
    },
    welcomeText: {
      color: colorsConfig.textPrimaryColor,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'left',
      marginTop: height * 0.025,
      paddingHorizontal: width * 0.05,
    },
    secondaryText: {
      color: colorsConfig.textSecondaryColor,
      fontSize: 20,
      fontWeight: 'light',
      textAlign: 'left',
      marginTop: height * 0.01,
      marginBottom: height * 0.01,
      paddingHorizontal: width * 0.05,
    },
    dateBookContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: width * 0.05,
      paddingVertical: 5,
      marginTop: height * 0.02,
      marginBottom: height * 0.01,
      backgroundColor: colorsConfig.textPrimaryColor,
    },
    dateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dateTextContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: colorsConfig.backgroundColorLight,
    },
    dateText: {
      color: colorsConfig.textPrimaryColor,
      fontSize: 22,
      fontWeight: 'bold',
    },
    dayMonthContainer: {
      flexDirection: 'column',
      padding: 10,
      backgroundColor: colorsConfig.textPrimaryColor,
    },
    monthText: {
      color: colorsConfig.backgroundColor,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    dayText: {
      color: colorsConfig.backgroundColor,
      fontSize: 14,
      fontWeight: 'semibold',
      textAlign: 'left',
    },
    zodiacContainer: {
      paddingHorizontal: width * 0.05,
      paddingTop: height * 0.02,
    },
    zodiacContainerHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: height * 0.02,
    },
    selectText: {
      color: colorsConfig.textSecondaryColor,
      fontSize: 16,
      textAlign: 'left',
    },
  });
}
