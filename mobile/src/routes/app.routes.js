import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform, View } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home';
import theme from '../theme';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  const icons = {
    Home: {
      lib: Feather,
      name: 'grid',
      cor: theme.colors.primary,
    },
    Cadastro: {
      lib: Feather,
      name: 'plus',
      cor: theme.colors.primary,
    },
  };
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#FFAC30',
          tabBarInactiveTintColor: '#282a3665',
          tabBarLabelStyle: {
            fontSize: 10,
            marginTop: -4,
          },
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
          tabBarIcon: ({ color, size, focused }) => {
            const { lib: Lib, name, cor } = icons[route.name];
            return (
              <Lib
                name={name}
                color={focused ? cor : '#282a3665'}
                size={30}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Início',
          }}
        />
        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: 'Cadastro',
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
