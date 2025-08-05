import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '@utils/constants';
import Home from '@screens/Home';
import Journal from '@screens/Journal';
import HoroscopeDetails from '@screens/HoroscopeDetails';
import { AppStackParamList } from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={SCREEN_NAMES.HOME}
    >
      <Stack.Screen name={SCREEN_NAMES.HOME} component={Home} />
      <Stack.Screen
        name={SCREEN_NAMES.HOROSCOPE_DETAILS}
        component={HoroscopeDetails}
      />
      <Stack.Screen name={SCREEN_NAMES.JOURNAL} component={Journal} />
    </Stack.Navigator>
  );
}
