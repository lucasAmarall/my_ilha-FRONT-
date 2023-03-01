import React, { useRef, useState } from 'react';
import { Animated, TextInput, TextInputProps, View } from 'react-native';
import { useStyles } from '../../hooks/theme/styles';
import { LoaderIcon } from '../LoaderIcon/LoaderIcon';
import { Spacer } from '../Spacer/Spacer';
import { useInputAnimations } from './Input.animations';

const Input: React.FC<
  Omit<TextInputProps, 'onChange' | 'onChangeText'> & IInputProps
> = ({
  value,
  onChange,
  success,
  error,
  label,
  message,
  bordersRadius,
  loading,
  onFocus,
  onBlur,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const {
    inputTranslateY,
    labelFontSize,
    labelTranslateY,
    labelOpacity,
    feedbackHeight,
    borderInterpolate,
    bgInterpolate,
    feedbackColor,
    borderAnimation,
  } = useInputAnimations({
    error,
    success,
    focused,
    value,
    bordersRadius,
  });
  const { styles } = useStyles();
  const inputRef = useRef<TextInput | null>(null);

  return (
    <View style={[styles.width('100%'), styles.relative(), styles.height(56)]}>
      <Animated.View
        style={[
          styles.width('100%'),
          styles.borderWidth(1),
          styles.relative(),
          styles.height(56),
          styles.paddingHorizontal(24),
          {
            borderColor: borderInterpolate,
            backgroundColor: bgInterpolate,
            ...borderAnimation,
          },
        ]}
      >
        <Animated.Text
          style={[
            styles.text1(),
            styles.flex(),
            styles.fontColor('black'),
            styles.absolute(),
            styles.top(8),
            styles.left(24),
            {
              opacity: labelOpacity,
              fontSize: labelFontSize,
              transform: [{ translateY: labelTranslateY }],
            },
          ]}
        >
          {label}
        </Animated.Text>
        <Animated.View
          style={[
            styles.flex(),
            { transform: [{ translateY: inputTranslateY }] },
          ]}
        >
          <TextInput
            {...props}
            ref={inputRef}
            numberOfLines={1}
            onBlur={e => {
              setFocused(false);
              onBlur?.(e);
            }}
            onFocus={e => {
              setFocused(true);
              onFocus?.(e);
            }}
            value={value}
            onChangeText={onChange}
            style={[
              styles.text1(),
              styles.flex(),
              styles.fontColor('black'),
              { lineHeight: styles.normalizeSize(16) },
            ]}
          />
        </Animated.View>
      </Animated.View>
      <View style={[styles.absolute(), styles.right(24), styles.top(14)]}>
        {loading && <LoaderIcon />}
      </View>
      <Animated.View
        style={[{ height: feedbackHeight }, styles.overflowHidden()]}
      >
        <Spacer space={8} />
        <Animated.Text style={[styles.text2(), { color: feedbackColor }]}>
          {message}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export { Input };
