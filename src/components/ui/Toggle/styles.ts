import { StyleSheet } from 'react-native';
import IColorsConfig from '@styles/colors/types';

export default function getToggleThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    toggleContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      maxWidth: 45,
      padding: 16,
    },
    toggleBackground: {
      height: 20,
      width: 45,
      backgroundColor: colorsConfig.inActiveColor,
      borderRadius: 999,
    },
    toggleCircle: {
      backgroundColor: colorsConfig.textPrimaryColor,
      height: 25,
      width: 25,
      borderRadius: 50,
      position: 'absolute',
      left: 0,
    },
  });
}
