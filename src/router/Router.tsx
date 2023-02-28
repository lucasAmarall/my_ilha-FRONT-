import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Paths } from '../constants/Paths';
import { useStyles } from '../hooks/theme/styles';
import { AppStack } from './AppStack';

const RouterStack = createNativeStackNavigator();

const Router = () => {
  const { styles } = useStyles();
  return (
    <View style={[styles.flex(), styles.bgColor('primary')]}>
      <NavigationContainer>
        <RouterStack.Navigator screenOptions={{ headerShown: false }}>
          {/* <RouterStack.Screen component={AuthStack} name={Paths.auth_stack} /> */}
          <RouterStack.Screen component={AppStack} name={Paths.app_stack} />
        </RouterStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export { Router };
