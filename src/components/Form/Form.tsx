import React, { useEffect } from 'react';
import { Keyboard, TouchableOpacity, View } from 'react-native';
import { assets } from '../../hooks/theme/assets';
import { useStyles } from '../../hooks/theme/styles';
import { Image } from '../Image/Image';
import { LoaderIcon } from '../LoaderIcon/LoaderIcon';

const Form: React.FC<IForm> = ({
  children,
  disabled,
  loading,
  onSubmit,
  customBtn,
}) => {
  const { styles } = useStyles();
  useEffect(() => {
    if (loading) {
      Keyboard.dismiss();
    }
  }, [loading]);

  return (
    <View
      style={[
        styles.width('100%'),
        styles.borderRadius(16),
        styles.opacity(loading ? 0.85 : 1),
      ]}
      pointerEvents={loading ? 'none' : 'auto'}
    >
      {children}
      <View
        style={[
          styles.absolute(),
          styles.right(24),
          styles.bottom(10),
          styles.width(36),
          styles.height(36),
          styles.opacity(disabled ? 0.5 : 1),
        ]}
      >
        <TouchableOpacity onPress={disabled ? () => null : onSubmit}>
          {customBtn || loading ? (
            <LoaderIcon />
          ) : (
            <Image
              source={assets.submit_button}
              style={[
                styles.width(36),
                styles.height(36),
                styles.borderRadius(40),
                styles.bgColor('purple'),
              ]}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { Form };
