import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useStyles } from '../../hooks/theme/styles';

const Screen: React.FC<IScreenProps> = ({ children, toast }) => {
  const { styles } = useStyles();

  return (
    <>
      {toast}
      <SafeAreaView style={[styles.flex(), styles.bgColor('primary')]}>
        <View style={[styles.container()]}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export { Screen };
