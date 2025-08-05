import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '@utils/constants';
import Home from '@screens/Home';
import Journal from '@screens/Journal';

const Stack = createNativeStackNavigator();

export default function AppStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREEN_NAMES.HOME} component={Home} />
      <Stack.Screen name={SCREEN_NAMES.JOURNAL} component={Journal} />
    </Stack.Navigator>
  );
}
