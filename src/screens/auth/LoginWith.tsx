import SideBorderText from '../../components/SideBorderText';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {IconButton, MD3Colors, Image, Button, Text} from 'react-native-paper';
import styles from '../styles';
import {
  Logo,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GoogleIcon,
} from '../../assets/svg';

export default function LoginWith({navigation}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={styles.container}>
      <View style={[styles.poster]}>
        <Logo width={100} height={100} />
        <Text variant="titleLarge" style={styles.text}>
          Sign up to continue
        </Text>
      </View>
      <Button
        mode="contained"
        labelStyle={styles.label}
        onPress={() => navigation.navigate('Login With Email')}
        style={styles.btn}>
        <Text style={{color: '#f92e4b'}}>Continue With Email</Text>
      </Button>
      <Button
        mode="contained"
        labelStyle={styles.label}
        onPress={() => navigation.navigate('Login With Number')}
        style={styles.btn}>
        <Text style={{color: '#f92e4b'}}>Use phone number</Text>
      </Button>
      <View style={[styles.bottomStyle]}>
        <SideBorderText width={110} text="or sign up with" />
        <View style={[styles.flex, styles.mt15]}>
          <FacebookIcon width={70} height={70} />
          <InstagramIcon width={70} height={70} />
          <TwitterIcon width={70} height={70} />
          <GoogleIcon width={70} height={70} />
        </View>
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
