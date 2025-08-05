import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getHoroscope } from '@services/horoscope';
import { useZodiac } from '@context/ZodiacContext';
import useAppTheme from '@hooks/useAppTheme';

export default function HoroscopeCard() {
  const { selectedZodiac, selectedZodiacData } = useZodiac();
  const { stylesConfig } = useAppTheme();

  const {
    data: horoscope,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['horoscope', selectedZodiac],
    queryFn: () => getHoroscope(selectedZodiac),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const styles = StyleSheet.create({
    container: {
      backgroundColor: stylesConfig.cardBackground,
      borderRadius: 16,
      padding: 20,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: stylesConfig.borderColor,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    zodiacEmoji: {
      fontSize: 32,
      marginRight: 12,
    },
    titleContainer: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      color: stylesConfig.textPrimaryColor,
    },
    subtitle: {
      fontSize: 14,
      color: stylesConfig.textSecondaryColor,
      marginTop: 2,
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      color: stylesConfig.textPrimaryColor,
      marginBottom: 16,
    },
    detailsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
    },
    detailItem: {
      backgroundColor: stylesConfig.backgroundColorLight,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
      minWidth: 80,
    },
    detailLabel: {
      fontSize: 12,
      color: stylesConfig.textSecondaryColor,
      fontWeight: '500',
    },
    detailValue: {
      fontSize: 14,
      color: stylesConfig.textPrimaryColor,
      fontWeight: '600',
      marginTop: 2,
    },
    loadingContainer: {
      alignItems: 'center',
      paddingVertical: 40,
    },
    errorContainer: {
      alignItems: 'center',
      paddingVertical: 20,
    },
    errorText: {
      color: '#FF6B6B',
      fontSize: 16,
      textAlign: 'center',
    },
  });

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={stylesConfig.primary} />
          <Text style={[styles.subtitle, { marginTop: 12 }]}>
            Loading your horoscope...
          </Text>
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Failed to load horoscope. Please try again.
          </Text>
        </View>
      </View>
    );
  }

  if (!horoscope) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.zodiacEmoji}>{selectedZodiacData?.emoji}</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{horoscope.title}</Text>
          <Text style={styles.subtitle}>
            {horoscope.current_date} • {horoscope.date_range}
          </Text>
        </View>
      </View>

      <Text style={styles.description}>{horoscope.description}</Text>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Mood</Text>
          <Text style={styles.detailValue}>{horoscope.mood}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Lucky Color</Text>
          <Text style={styles.detailValue}>{horoscope.color}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Lucky Number</Text>
          <Text style={styles.detailValue}>{horoscope.lucky_number}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Lucky Time</Text>
          <Text style={styles.detailValue}>{horoscope.lucky_time}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Compatibility</Text>
          <Text style={styles.detailValue}>{horoscope.compatibility}</Text>
        </View>
      </View>
    </View>
  );
}
