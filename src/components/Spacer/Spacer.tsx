import React from 'react';
import { View } from 'react-native';
import { useStyles } from '../../hooks/theme/styles';

const Spacer: React.FC<ISpacerProps> = ({ space = 0, vertical }) => {
  const { styles } = useStyles();

  return (
    <View
      style={[vertical ? styles.width(space) : styles.height(space)]}
      pointerEvents={'none'}
    />
  );
};

export { Spacer };
