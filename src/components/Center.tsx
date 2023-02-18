import React from 'react';
import { View, StyleSheet } from 'react-native';

const Center = ({ children }) => {
  return <View style={styes.container}>{children}</View>;
};

export default Center;
const styes = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
