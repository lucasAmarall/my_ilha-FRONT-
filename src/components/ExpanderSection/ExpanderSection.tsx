import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useStyles } from '../../hooks/theme/styles';

const ExpanderSection: React.FC<IExpanderSectionProps> = ({
  children,
  open,
  height: _height,
}) => {
  const { styles } = useStyles();
  const height = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(height, {
      toValue: open ? _height : 0,
      useNativeDriver: false,
      duration: 250,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_height, open]);

  return (
    <Animated.View style={[styles.overflowHidden(), { height }]}>
      {children}
    </Animated.View>
  );
};

export { ExpanderSection };
