import React, { useContext, useRef, useState, useEffect } from 'react';
import { View, TouchableOpacity, Animated, Easing } from 'react-native';
import { AppThemeContext } from '@components/AppThemeProvider';
import getToggleThemeStyles from './styles';
import IToggleProps from './types';

export default function Toggle(props: IToggleProps) {
  const [enabled, setEnabled] = useState<boolean>(false);

  const toggleAnimation = useRef(new Animated.Value(0)).current;

  const { stylesConfig } = useContext(AppThemeContext);

  const styles = getToggleThemeStyles(stylesConfig);

  const animateRight = () => {
    Animated.timing(toggleAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const animateLeft = () => {
    Animated.timing(toggleAnimation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const handleOnPress = () => {
    setEnabled(!enabled);
    if (enabled) {
      // disable actions
      animateLeft();
      props.disableFn && props.disableFn();
    } else {
      // enable actions
      animateRight();
      props.enableFn && props.enableFn();
    }
  };

  const translateValue = toggleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  useEffect(() => {
    setEnabled(!!props.enabled);
    if (props.enabled) animateRight();
    if (!props.enabled) animateLeft();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.enabled]);

  return (
    <TouchableOpacity onPress={handleOnPress} activeOpacity={1}>
      <View style={styles.toggleContainer}>
        <View
          style={[
            styles.toggleBackground,
            {
              backgroundColor: enabled
                ? stylesConfig.primary
                : stylesConfig.inActiveColor,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.toggleCircle,
            { transform: [{ translateX: translateValue }] },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
}
