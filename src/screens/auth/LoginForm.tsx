import SideBorderText from '../../components/SideBorderText';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {
  IconButton,
  MD3Colors,
  Image,
  Button,
  Text,
  TextInput,
} from 'react-native-paper';
import styles from '../styles';
import {
  Logo,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GoogleIcon,
} from '../../assets/svg';

const LoginForm = ({navigation}) => {
  const [text, setText] = React.useState('');
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.poster, styles.mt15]}>
          <Logo width={100} height={100} />
          <Text variant="titleLarge" style={styles.text}>
            Sign up with Email
          </Text>
        </View>
        <View style={[styles.mt15]}>
          <View>
            <TextInput
              style={{backgroundColor: 'white', width: 300, height: 50}}
              mode="outlined"
              label="Email"
              placeholder="Enter Your Email"
              right={<TextInput.Icon icon="email" />}
            />
          </View>
          <View>
            <TextInput
              style={{backgroundColor: 'white', width: 300, height: 50}}
              mode="outlined"
              label="Password"
              secureTextEntry
              placeholder="Enter Your Password"
              right={<TextInput.Icon icon="eye" />}
            />
          </View>
          <View>
            <Button
              mode="contained"
              labelStyle={styles.label}
              onPress={() => navigation.navigate('Home')}
              style={styles.btn}>
              <Text style={{color: '#f92e4b'}}>Sign up</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
/*
  <Button
          mode="contained"
          labelStyle={styles.label}
          onPress={() => navigation.navigate('LoginForm')}
          style={styles.btn}>
          <Text style={{color: '#f92e4b'}}>Continue With Email</Text>
        </Button>
        <Button
          mode="contained"
          labelStyle={styles.label}
          onPress={() => navigation.navigate('LoginForm')}
          style={styles.btn}>
          <Text style={{color: '#f92e4b'}}>Use phone number</Text>
        </Button>
        */
