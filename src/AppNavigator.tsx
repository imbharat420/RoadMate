import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Home from './screens/Home';
import Profile from './screens/Profile';
import Splash from './screens/Splash';
import OnboardingScreen from './screens/Onboarding';
import SelectInterest from './screens/SelectInterest';
import Inbox from './screens/Inbox';
import LoginWith from '@screens/auth/LoginWith';
import LoginNumber from '@screens/auth/LoginNumber';
import Gender from '@screens/auth/Gender';
import LoginForm from '@screens/auth/LoginForm';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginWith"
          component={LoginWith}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login With Number"
          component={LoginNumber}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Login With Email"
          component={LoginForm}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="SelectInterest"
          component={SelectInterest}
          options={{headerShown: true}}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Inbox" component={Inbox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
