import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import Home from './screens/Home';
import Profile from './screens/Profile';
import Splash from './screens/Splash';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Details" component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
