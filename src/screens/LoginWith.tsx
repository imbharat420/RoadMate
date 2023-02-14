import SideBorderText from '../components/SideBorderText';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {IconButton, MD3Colors, Image, Button, Text} from 'react-native-paper';
import styles from './styles';

export default function LoginWith() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={styles.container}>
      <View style={[styles.poster]}>
        <Text variant="titleLarge" style={styles.text}>
          Sign up to continue
        </Text>
      </View>
      <Button
        mode="contained" 
        labelStyle={styles.label}
        onPress={() => console.log('Pressed')}
        style={styles.btn}>
        <Text style={{color: '#f92e4b'}}>Continue With Email</Text>
      </Button>
      <Button
        mode="contained" 
        labelStyle={styles.label}
        onPress={() => console.log('Pressed')}
        style={styles.btn}>
        <Text style={{color: '#f92e4b'}}>Use phone number</Text>
      </Button> 
      <View style={[styles.bottomStyle]}>
        <SideBorderText width={110} text="or sign up with" />
      </View>
    </View>
  );
}


/*
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
*/