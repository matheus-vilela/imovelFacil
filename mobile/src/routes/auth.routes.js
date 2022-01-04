import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import AppRoutes from './app.routes';

const Stack = createStackNavigator();

export default function AuthRoute() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={AppRoutes} />

    </Stack.Navigator>
  );
}
