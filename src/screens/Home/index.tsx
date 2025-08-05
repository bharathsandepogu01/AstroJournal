import { useNavigation } from '@react-navigation/native';
import { AppStackNavigationProp } from '@navigation/types';
import { SCREEN_NAMES } from '@utils/constants';
import { View, Text, Button } from 'react-native';
import { mmkvStorage } from '@utils/storage';

export default function Home() {
  const navigation = useNavigation<AppStackNavigationProp>();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Horoscope Details"
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.HOROSCOPE_DETAILS, { sign: 'aries' })
        }
      />
      <Button
        title="Clear Local Storage"
        onPress={() => mmkvStorage.clearStorage()}
      />
    </View>
  );
}
