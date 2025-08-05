import IColorsConfig from '@styles/types';
import { StyleSheet } from 'react-native';

export default function getZodiacGridThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    card: {
      width: '30%',
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 8,
      backgroundColor: colorsConfig.textPrimaryColor,
      borderRadius: 12,
    },
    emoji: {
      fontSize: 28,
    },
    name: {
      marginTop: 4,
      fontWeight: '600',
      color: colorsConfig.backgroundColor,
    },
  });
}
