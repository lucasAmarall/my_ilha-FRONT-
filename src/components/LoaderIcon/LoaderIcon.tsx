import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { assets } from '../../hooks/theme/assets';
import { useStyles } from '../../hooks/theme/styles';
import { Image } from '../Image/Image';

const LoaderIcon = ({ size }: { size?: number }) => {
  const { styles } = useStyles();
  const spinValue = useRef(new Animated.Value(0)).current;

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const spinLoop = Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
      easing: Easing.linear,
    }),
  );

  useEffect(() => {
    spinLoop.reset();
    spinLoop.start();
  }, [spinLoop, spinValue]);

  return (
    <Animated.View
      style={[
        styles.width(size || 36),
        styles.height(size || 36),
        { transform: [{ rotate: spin }] },
      ]}
    >
      <Image source={assets.loader_icon} style={[styles.flex(1)]} />
    </Animated.View>
  );
};

export { LoaderIcon };
