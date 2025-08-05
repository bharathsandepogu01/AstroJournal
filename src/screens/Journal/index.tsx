import { useEffect, useState } from 'react';
import { View, Pressable, Text, TextInput, ScrollView } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { AppStackNavigationProp } from '@navigation/types';
import useAppTheme from '@hooks/useAppTheme';
import getJournalThemeStyles from './styles';
import { getCache, setCache } from '@utils/cache';
import { getJournalCacheKey } from '@utils/cacheKeys';

export default function Journal() {
  const [entry, setEntry] = useState('');
  const navigation = useNavigation<AppStackNavigationProp>();

  const { stylesConfig } = useAppTheme();

  const styles = getJournalThemeStyles(stylesConfig);

  useEffect(() => {
    // Load journal entry from cache or API
    const journalEntry = getCache<string>(getJournalCacheKey());

    if (!journalEntry) return;

    setEntry(journalEntry);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      // Save journal entry to cache or API
      setCache(getJournalCacheKey(), entry);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [entry]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color={stylesConfig.textPrimaryColor} />
        </Pressable>
        <Text style={styles.headerText}>Journal</Text>
      </View>

      <ScrollView style={styles.scroll} keyboardShouldPersistTaps="handled">
        <TextInput
          style={styles.input}
          multiline
          value={entry}
          onChangeText={setEntry}
          placeholder="Write your thoughts here..."
          placeholderTextColor={stylesConfig.textSecondaryColor}
          textAlignVertical="top"
        />
      </ScrollView>
    </View>
  );
}
