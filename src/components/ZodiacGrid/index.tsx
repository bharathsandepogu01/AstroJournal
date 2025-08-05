import useAppTheme from '@hooks/useAppTheme';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import getZodiacGridThemeStyles from './styles';
import IZodiacGridProps from './types';
import { ZODIAC_SIGNS } from '@utils/constants';

const ZodiacGrid = ({ onSelectZodiacSign }: IZodiacGridProps) => {
  const { stylesConfig } = useAppTheme();

  const styles = getZodiacGridThemeStyles(stylesConfig);

  return (
    <View style={styles.grid}>
      {ZODIAC_SIGNS.map(item => (
        <Pressable
          key={item.name}
          onPress={() => onSelectZodiacSign(item.sign)}
          style={styles.card}
        >
          <Text style={styles.emoji}>{item.emoji}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ZodiacGrid;
