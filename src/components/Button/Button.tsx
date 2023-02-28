import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useStyles } from '../../hooks/theme/styles';
import { LoaderIcon } from '../LoaderIcon/LoaderIcon';

const Button: React.FC<IButtonProps> = ({
  children,
  onPress,
  variant,
  loading,
}) => {
  const { styles } = useStyles();
  const getVariantStyles = () => {
    if (variant === 'button') {
      return {
        container: [
          styles.bgColor('purple'),
          styles.borderRadius(33),
          styles.paddingVertical(18),
          styles.alignContent('center'),
          styles.justifyContent('center'),
          styles.alignItems('center'),
          styles.row(),
        ],
        text: [styles.text4(), styles.fontColor('white')],
      };
    }

    return {
      container: [],
      text: [styles.text4(), styles.fontColor('purple'), styles.width('100%')],
    };
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.width('100%')]}
    >
      <View style={getVariantStyles().container}>
        <Text style={getVariantStyles().text}>{children}</Text>
        {loading && (
          <View style={[styles.marginLeft(16)]}>
            <LoaderIcon size={20} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export { Button };
