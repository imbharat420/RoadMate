import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Lottie from 'lottie-react-native';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 1000);
  }, []);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Lottie source={require('./animation.json')} autoPlay loop />
    </View>
  );
}
