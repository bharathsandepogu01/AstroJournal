import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { ChevronDown, X } from 'lucide-react-native';
import { ZODIAC_SIGNS } from '@utils/constants';
import useAppTheme from '@hooks/useAppTheme';
import { useZodiac } from '@context/ZodiacContext';

interface ZodiacPickerProps {
  onSelect?: (sign: string) => void;
}

export default function ZodiacPicker({ onSelect }: ZodiacPickerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { selectedZodiac, setSelectedZodiac, selectedZodiacData } = useZodiac();
  const { stylesConfig } = useAppTheme();

  const handleSelect = (sign: string) => {
    setSelectedZodiac(sign);
    onSelect?.(sign);
    setIsVisible(false);
  };

  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    pickerButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: stylesConfig.cardBackground,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: stylesConfig.borderColor,
    },
    pickerText: {
      fontSize: 16,
      color: stylesConfig.textPrimaryColor,
      fontWeight: '500',
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: stylesConfig.backgroundColor,
      borderRadius: 16,
      padding: 20,
      width: '90%',
      maxHeight: '80%',
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: stylesConfig.textPrimaryColor,
    },
    closeButton: {
      padding: 4,
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
      marginVertical: 2,
    },
    optionText: {
      fontSize: 16,
      color: stylesConfig.textPrimaryColor,
      marginLeft: 12,
    },
    selectedOption: {
      backgroundColor: stylesConfig.primary + '20',
    },
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.pickerButton} onPress={() => setIsVisible(true)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, marginRight: 8 }}>
            {selectedZodiacData?.emoji}
          </Text>
          <Text style={styles.pickerText}>
            {selectedZodiacData?.name || 'Select Zodiac Sign'}
          </Text>
        </View>
        <ChevronDown size={20} color={stylesConfig.textSecondaryColor} />
      </Pressable>

      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setIsVisible(false)}
        >
          <Pressable style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Your Zodiac Sign</Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => setIsVisible(false)}
              >
                <X size={24} color={stylesConfig.textSecondaryColor} />
              </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {ZODIAC_SIGNS.map(sign => (
                <Pressable
                  key={sign.sign}
                  style={[
                    styles.optionContainer,
                    selectedZodiac === sign.sign && styles.selectedOption,
                  ]}
                  onPress={() => handleSelect(sign.sign)}
                >
                  <Text style={{ fontSize: 24 }}>{sign.emoji}</Text>
                  <Text style={styles.optionText}>{sign.name}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
