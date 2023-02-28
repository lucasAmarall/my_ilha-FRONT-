import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Screen } from '../../components/Screen/Screen';

const Chat = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    });
    navigation.addListener('beforeRemove', () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: null,
        },
      });
    });
  }, [navigation]);

  return (
    <Screen>
      <Text>Chat</Text>
    </Screen>
  );
};

export { Chat };
