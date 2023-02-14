import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
// import GetStarted from './screens/GetStarted';
import LoginWith from './screens/LoginWith';
// const CardComponent = () => <Text>Hello</Text>;

export default function Main() {
  return (
    <PaperProvider>
      {/* <GetStarted /> */}
      <LoginWith />
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