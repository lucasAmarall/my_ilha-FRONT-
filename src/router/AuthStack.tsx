import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Paths } from '../constants/Paths';
import { ForgotPassword } from '../pages/ForgotPassword/ForgotPassword';
import { LogIn } from '../pages/LogIn/LogIn';

const AuthStack_ = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <AuthStack_.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack_.Screen component={LogIn} name={Paths.login} />
      <AuthStack_.Screen
        component={ForgotPassword}
        name={Paths.forgot_password}
      />
    </AuthStack_.Navigator>
  );
};

export { AuthStack };
