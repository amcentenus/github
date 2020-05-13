import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#7159c1' },
          headerTintColor: '#fff',
        }}
      >
        <AppStack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Usuários' }}
        />
        <AppStack.Screen name="User" component={User} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
