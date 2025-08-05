import useAppTheme from '@hooks/useAppTheme';
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import getHomeThemeStyles from './styles';
import { NotebookPenIcon } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { AppStackNavigationProp } from '@navigation/types';
import { SCREEN_NAMES } from '@utils/constants';
import Toggle from '@components/ui/Toggle';
import ZodiacGrid from '@components/ZodiacGrid';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation<AppStackNavigationProp>();
  const { stylesConfig, setAppTheme, appTheme } = useAppTheme();

  const styles = getHomeThemeStyles(stylesConfig);

  const currentDate = new Date();
  const date = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
  });
  const month = currentDate.toLocaleDateString('en-US', {
    month: 'short',
  });
  const day = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
  });

  const navigateToHoroscopeDetails = (sign: string) => {
    navigation.navigate(SCREEN_NAMES.HOROSCOPE_DETAILS, { sign });
  };

  const isDarkMode = appTheme === 'dark';

  const handleDarkModeToggle = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setAppTheme(newTheme);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          stylesConfig.backgroundColor,
          stylesConfig.backgroundColorLight,
          stylesConfig.backgroundColor,
        ]}
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.starsContainer}>
        {[...Array(50)].map((_, i) => (
          <View
            key={i}
            style={[
              styles.star,
              {
                left: Math.random() * width,
                top: Math.random() * 800,
                opacity: Math.random() * 0.8 + 0.2,
              },
            ]}
          />
        ))}
      </View>

      <ScrollView>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.secondaryText}>What you want to know?</Text>

        <View style={styles.dateBookContainer}>
          <View style={styles.dateContainer}>
            <View style={styles.dateTextContainer}>
              <Text style={styles.dateText}>{date}</Text>
            </View>
            <View style={styles.dayMonthContainer}>
              <Text style={styles.monthText}>{month}</Text>
              <Text style={styles.dayText}>{day}</Text>
            </View>
          </View>

          <Pressable
            onPress={() => navigation.navigate(SCREEN_NAMES.JOURNAL)}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          >
            <NotebookPenIcon size={24} color={stylesConfig.backgroundColor} />
          </Pressable>
        </View>

        <View style={styles.zodiacContainer}>
          <View style={styles.zodiacContainerHeader}>
            <Text style={styles.selectText}>Select your sign</Text>
            <Toggle
              enabled={isDarkMode}
              enableFn={handleDarkModeToggle}
              disableFn={handleDarkModeToggle}
            />
          </View>

          <ZodiacGrid onSelectZodiacSign={navigateToHoroscopeDetails} />
        </View>
      </ScrollView>
    </View>
  );
}
