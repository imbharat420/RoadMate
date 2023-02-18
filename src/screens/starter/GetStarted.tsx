import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, MD3Colors, Image, Button, Text } from 'react-native-paper';

export default function GetStarted() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={styles.container}>
      <View style={[styles.poster]}>
        <Text style={styles.text}>AR Dating</Text>
      </View>
      <Button
        mode="contained"
        labelStyle={styles.label}
        onPress={() => console.log('Pressed')}
        style={styles.btn}
      >
        <Text style={{ color: '#f92e4b' }}>Get Started</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f92e4b',
    height: '100%',
  },
  btn: {
    backgroundColor: '#fff',
    width: '80%',
    alignSelf: 'center',
    top: '10%',
  },
  label: { color: '#f92e4b', fontSize: 15 },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  poster: {
    height: '60%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardShadow: {
    borderRadius: 16,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
  },
});
