import React, { useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};

const TouchFeedback = ({
  children,
  onPress,
  onlyHaptic,
  activeOpacity = 1,
}: {
  children: any;
  onPress?: () => void;
  onlyHaptic?: boolean;
  activeOpacity?: number;
}) => {
  const animation = useRef(new Animated.Value(0.5)).current;

  const scale = animation.interpolate({
    inputRange: [0.2, 0.5, 0.7],
    outputRange: [1.02, 1, 0.98],
  });

  const onPressIn = () => {
    if (onlyHaptic) {
      ReactNativeHapticFeedback.trigger('effectDoubleClick', options);
      return;
    }
    Animated.timing(animation, {
      useNativeDriver: true,
      toValue: 0.2,
      duration: 100,
    }).start(() => {
      ReactNativeHapticFeedback.trigger('keyboardPress', options);
    });
  };

  const onPressOut = () => {
    if (onlyHaptic) {
      ReactNativeHapticFeedback.trigger('keyboardPress', options);
      return;
    }
    Animated.timing(animation, {
      useNativeDriver: true,
      toValue: 0.7,
      duration: 100,
    }).start(() => {
      ReactNativeHapticFeedback.trigger('keyboardRelease', options);

      Animated.timing(animation, {
        useNativeDriver: true,
        toValue: 0.5,
        duration: 100,
      });
    });
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={() => {
        ReactNativeHapticFeedback.trigger('longPress', options);
        // Vibration.(100);]
      }}
      activeOpacity={activeOpacity}
    >
      <Animated.View style={{ transform: [{ scale: scale }] }}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export { TouchFeedback };
