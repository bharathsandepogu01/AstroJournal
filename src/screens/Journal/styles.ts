import IColorsConfig from '@styles/types';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function getJournalThemeStyles(colorsConfig: IColorsConfig) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colorsConfig.backgroundColor,
      paddingVertical: 16,
      paddingHorizontal: 12,
    },
    headerText: {
      fontSize: 20,
      color: colorsConfig.textPrimaryColor,
      fontWeight: 'bold',
    },
    backButton: {
      marginRight: 12,
    },
    scroll: {
      flex: 1,
      marginBottom: 16,
    },
    input: {
      height: height * 0.5,
      width: width * 0.9,
      marginHorizontal: 'auto',
      marginTop: 16,
      color: colorsConfig.textPrimaryColor,
      fontSize: 16,
      borderColor: colorsConfig.borderColor,
      borderWidth: 1,
      borderRadius: 8,
      padding: 12,
      backgroundColor: colorsConfig.backgroundColorLight,
    },
  });
}
