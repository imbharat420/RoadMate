import * as React from 'react';
import {Provider as PaperProvider, Text,Button} from 'react-native-paper';
// import CardComponent from './src/Card';

const CardComponent = () => <Text>Hello</Text>;
const Main = () => {
  return (
    <PaperProvider>
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
      <CardComponent />
    </PaperProvider>
  );
}
export default Main