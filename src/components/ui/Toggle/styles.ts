import { StyleSheet } from 'react-native';
import IColorsConfig from '@styles/types';

export default function getToggleThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    toggleContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      maxWidth: 40,
      padding: 14,
    },
    toggleBackground: {
      height: 18,
      width: 40,
      backgroundColor: colorsConfig.inActiveColor,
      borderRadius: 999,
    },
    toggleCircle: {
      backgroundColor: colorsConfig.textPrimaryColor,
      height: 23,
      width: 23,
      borderRadius: 50,
      position: 'absolute',
      left: 0,
    },
  });
}
