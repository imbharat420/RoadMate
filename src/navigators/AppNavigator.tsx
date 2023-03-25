import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Home from '../screens/Home';
import Profile from '@screens/Profile';
import Splash from '../screens/Splash';
import OnboardingScreen from '../screens/Onboarding';
import SelectInterest from '../screens/auth/SelectInterest';
import Inbox from '../screens/Inbox';
import LoginWith from '@screens/auth/LoginWith';
import LoginNumber from '@screens/auth/LoginNumber';
import Gender from '@screens/auth/Gender';
import LoginForm from '@screens/auth/LoginForm';
import BottomNavigationWrapper from './BottomNavigationWrapper';
import Parent from './Parent';
import RegisterWith from '@screens/auth/RegisterWith';

const Stack = createNativeStackNavigator();

const initStack = [
  {
    name: 'Splash',
    component: Splash,
    options: {headerShown: false},
  },
  {
    name: 'Onboarding',
    component: OnboardingScreen,
    options: {headerShown: false},
  },
  {
    name: 'Tabs',
    component: BottomNavigationWrapper,
    options: {headerShown: false},
  },
  {
    name: 'Parent',
    component: Parent,
    options: {headerShown: false},
  },
  {
    name: 'Home',
    component: Home,
    options: {headerShown: false},
  },
  {
    name: 'Select Interest',
    component: SelectInterest,
    options: {headerShown: false},
  },
  {
    name: 'LoginWith',
    component: LoginWith,
    options: {headerShown: false},
  },
  {
    name: 'Login With Number',
    component: LoginNumber,
    options: {headerShown: false},
  },
  {
    name: 'Login With Email',
    component: LoginForm,
    options: {headerShown: false},
  },
  {
    name: 'RegisterWith',

    component: RegisterWith,
    options: {headerShown: false},
  },
  {
    name: 'Profile',
    component: Profile,
    options: {headerShown: false},
  },
  {
    name: 'Inbox',
    component: Inbox,
    options: {headerShown: false},
  },
];

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Parent">
        {initStack.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />  <Stack.Screen
          name="Tabs"
          component={BottomNavigationWrapper}
          // options={{headerShown: true}}
        />

        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: true}}
        />

        <Stack.Screen
          name="Select Interest"
          component={SelectInterest}
          options={{headerShown: true}}
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
          name="RegisterWith"
          component={RegisterWith}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={{headerShown: true}}
        />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Inbox" component={Inbox} />
        */
