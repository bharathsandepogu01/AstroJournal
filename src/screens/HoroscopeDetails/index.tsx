import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import useHoroscopeQuery from '@hooks/useHoroscopeQuery';
import useDelayedLoader from '@hooks/useDelayedLoader';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  AppStackNavigationProp,
  HoroscopeDetailsScreenRouteProp,
} from '@navigation/types';
import useAppTheme from '@hooks/useAppTheme';
import getHoroscopeDetailsThemeStyles from './styles';
import { ZODIAC_EMOJIS } from '@utils/constants';

export default function HoroscopeDetails() {
  const navigation = useNavigation<AppStackNavigationProp>();

  const { sign } = useRoute<HoroscopeDetailsScreenRouteProp>().params;

  const { data, isLoading, isError, isSuccess } = useHoroscopeQuery(sign);

  const showLoader = useDelayedLoader(isLoading);

  const { stylesConfig } = useAppTheme();

  const styles = getHoroscopeDetailsThemeStyles(stylesConfig);

  const displayContent = isSuccess && data;
  const displayError = isError && !isLoading;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color={stylesConfig.textPrimaryColor} />
        </Pressable>
      </View>

      {showLoader && <Text style={styles.loadingText}>Loading...</Text>}

      {displayError && (
        <Text style={styles.errorText}>Error loading horoscope details.</Text>
      )}

      {displayContent && (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.emoji}>{ZODIAC_EMOJIS[sign]}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.dateRange}>{data.date_range}</Text>

          <View style={styles.card}>
            <Text style={styles.paragraph}>{data.description}</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
