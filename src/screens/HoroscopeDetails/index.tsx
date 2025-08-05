import { HoroscopeDetailsScreenRouteProp } from '@navigation/types';
import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import useHoroscopeQuery from '@hooks/useHoroscopeQuery';
import useDelayedLoader from '@hooks/useDelayedLoader';

export default function HoroscopeDetails() {
  const { sign } = useRoute<HoroscopeDetailsScreenRouteProp>().params;

  const { data, isLoading, isError, isSuccess, isFetching } =
    useHoroscopeQuery(sign);

  const showLoader = useDelayedLoader(isLoading);

  console.log(isError, isLoading, isSuccess, isFetching, data, showLoader);

  return (
    <View>
      <Text>HoroscopeDetails, {sign}</Text>
      {data && <Text>{data.description}</Text>}
    </View>
  );
}
