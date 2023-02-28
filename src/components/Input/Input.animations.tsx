import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { useNormalizeSize } from '../../hooks/theme/normalizeSize';
import { useStyles } from '../../hooks/theme/styles';

const BORDER_TIMING_ANIMATION = 100;
const GENERAL_TIMING_ANIMATIONS = BORDER_TIMING_ANIMATION * 1.4;

const useInputAnimations = ({
  error,
  success,
  focused,
  value,
  bordersRadius,
}: IUseInputAnimationsProps) => {
  const { styles } = useStyles();
  const labelAnimation = useRef(new Animated.Value(0)).current;
  const feedbackMessage = useRef(new Animated.Value(0)).current;
  const { normalizeSize } = useNormalizeSize();

  const borderAnimation = {
    borderTopLeftRadius: useRef(new Animated.Value(normalizeSize(16))).current,
    borderTopRightRadius: useRef(new Animated.Value(normalizeSize(16))).current,
    borderBottomLeftRadius: useRef(new Animated.Value(normalizeSize(16)))
      .current,
    borderBottomRightRadius: useRef(new Animated.Value(normalizeSize(16)))
      .current,
  };

  const inputTranslateY = labelAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 0],
  });
  const labelFontSize = labelAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [styles.text2().fontSize, styles.text1().fontSize],
  });
  const labelTranslateY = labelAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, styles.normalizeSize(10)],
  });
  const labelOpacity = labelAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  });

  const feedbackHeight = feedbackMessage.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  const borderInterpolate = feedbackMessage.interpolate({
    inputRange: [0, 1],
    outputRange: [
      styles.borderColor('light_gray').borderColor,
      success
        ? styles.borderColor('green').borderColor
        : styles.borderColor('red').borderColor,
    ],
  });

  const bgInterpolate = feedbackMessage.interpolate({
    inputRange: [0, 1],
    outputRange: [
      styles.bgColor('light_gray').backgroundColor,
      success
        ? styles.bgColor('green').backgroundColor
        : styles.bgColor('red').backgroundColor,
    ],
  });

  const feedbackColor = feedbackMessage.interpolate({
    inputRange: [0, 1],
    outputRange: [
      styles.fontColor('light_gray').color,
      success ? styles.fontColor('green').color : styles.fontColor('red').color,
    ],
  });

  useEffect(() => {
    Animated.timing(labelAnimation, {
      toValue: focused || value ? 0 : 1,
      duration: GENERAL_TIMING_ANIMATIONS,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [labelAnimation, focused, value]);

  useEffect(() => {
    Animated.timing(feedbackMessage, {
      toValue: success || error ? 1 : 0,
      duration: GENERAL_TIMING_ANIMATIONS,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [error, feedbackMessage, success]);

  useEffect(() => {
    Animated.timing(borderAnimation.borderTopLeftRadius, {
      toValue: normalizeSize(bordersRadius?.topLeft ?? 16),
      duration: BORDER_TIMING_ANIMATION,
      useNativeDriver: false,
    }).start();
  }, [
    borderAnimation.borderTopLeftRadius,
    bordersRadius?.topLeft,
    error,
    normalizeSize,
    success,
  ]);

  useEffect(() => {
    Animated.timing(borderAnimation.borderBottomLeftRadius, {
      toValue: normalizeSize(bordersRadius?.bottomLeft ?? 16),
      duration: BORDER_TIMING_ANIMATION,
      useNativeDriver: false,
    }).start();
  }, [
    borderAnimation.borderBottomLeftRadius,
    bordersRadius?.bottomLeft,
    error,
    normalizeSize,
    success,
  ]);

  useEffect(() => {
    Animated.timing(borderAnimation.borderTopRightRadius, {
      toValue: normalizeSize(bordersRadius?.topRight ?? 16),
      duration: BORDER_TIMING_ANIMATION,
      useNativeDriver: false,
    }).start();
  }, [
    borderAnimation.borderTopRightRadius,
    bordersRadius?.topRight,
    error,
    normalizeSize,
    success,
  ]);

  useEffect(() => {
    Animated.timing(borderAnimation.borderBottomRightRadius, {
      toValue: normalizeSize(bordersRadius?.bottomRight ?? 16),
      duration: BORDER_TIMING_ANIMATION,
      useNativeDriver: false,
    }).start();
  }, [
    borderAnimation.borderBottomLeftRadius,
    borderAnimation.borderBottomRightRadius,
    bordersRadius?.bottomLeft,
    bordersRadius?.bottomRight,
    error,
    normalizeSize,
    success,
  ]);

  return {
    inputTranslateY,
    labelFontSize,
    labelTranslateY,
    labelOpacity,
    feedbackHeight,
    borderInterpolate,
    bgInterpolate,
    feedbackColor,
    borderAnimation,
  };
};

export { useInputAnimations };
