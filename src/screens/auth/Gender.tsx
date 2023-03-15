import {View} from 'react-native';
import React from 'react';
import Center from '../../components/Center';
import {RadioButton, Surface, Text, Avatar, Button} from 'react-native-paper';
import {
  Logo,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GoogleIcon,
} from '../../assets/svg';
import styles from '@screens/styles';
import {Image} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
export default function Gender() {
  const [checked, setChecked] = React.useState('male');
  return (
    <View style={styles.container}>
      <View style={[styles.poster]}>
        <Logo width={100} height={100} />
        <Text variant="titleLarge" style={styles.text}>
          I am a ?
        </Text>
      </View>
      <View style={[styles.flex, styles.mt15]}>
        <View style={[styles.flex, {flexDirection: 'column'}]}>
          <View
            style={{borderColor: '#ffff', borderWidth: 2, borderRadius: 50}}>
            <Avatar.Image
              size={100}
              source={require('../../assets/img/male.jpg')}
            />
          </View>
          <Text variant="titleMedium" style={{color: '#ffff'}}>
            Male
          </Text>
        </View>
        <View style={[styles.flex, {flexDirection: 'column'}]}>
          <View
            style={{borderColor: '#ffff', borderWidth: 2, borderRadius: 50}}>
            <Avatar.Image
              size={100}
              style={{
                backgroundColor: '#f92e4b',
              }}
              source={require('../../assets/img/profile1.jpg')}
            />
          </View>
          <Text variant="titleMedium" style={{color: '#ffff'}}>
            Female
          </Text>
        </View>
      </View>
      <View>
        <Button
          mode="contained"
          labelStyle={styles.label}
          onPress={() => navigation.navigate('Home')}
          style={styles.btn}>
          <Text style={{color: '#f92e4b'}}>Get Started</Text>
        </Button>
      </View>
    </View>
  );
}

/*
 <View style={styles.flex}>
          <Text>Male</Text>
          <RadioButton
            value="male"
            status={checked === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('male')}
          />
        </View>
        <View style={styles.flex}>
          <Text>Female</Text>
          <RadioButton
            value="female"
            status={checked === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('female')}
          />
        </View>
        */
