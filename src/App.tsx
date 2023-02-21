import * as React from 'react';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
// import AppNavigator from './AppNavigator';
// import GetStarted from './screens/GetStarted';
import LoginWith from './screens/auth/LoginWith';
import Gender from './screens/auth/Gender';
import Onboarding from './screens/Onboarding';
import SelectInterest from './screens/SelectInterest';
import UploadImages from './screens/UploadImages';
import Profile from './screens/Profile';
// const CardComponent = () => <Text>Hello</Text>;

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    myOwnColor: '#BADA55',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Profile />
    </PaperProvider>
  );
}

/*
 <Text>This is text</Text>
      <Button
        icon={{
          uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400',
        }}>
        Press me
      </Button>
      <Button
        icon={{
          source: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400',
          direction: 'rtl',
        }}>
        Press me
      </Button>
*/
