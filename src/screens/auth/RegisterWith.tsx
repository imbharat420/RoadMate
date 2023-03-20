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

const RegisterWith = ({navigation}) => {
  const [text, setText] = React.useState('');
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.poster, styles.mt15]}>
          <Logo width={100} height={100} />
          <Text variant="titleLarge" style={styles.text}>
            Sign In
          </Text>
        </View>
        <View style={[styles.mt15]}>
          <View>
            <TextInput
              style={{backgroundColor: 'white', width: 300, height: 50}}
              mode="outlined"
              label="Email/Phone"
              placeholder="Enter Your Email/Phone Number"
              right={<TextInput.Icon icon="phone" />}
            />
          </View>
          <View>
            <TextInput
              style={{backgroundColor: 'white', width: 300, height: 50}}
              mode="outlined"
              secureTextEntry
              label="Password"
              placeholder="Enter Your password"
              right={<TextInput.Icon icon="eye" />}
            />
          </View>
          <View>
            <Button
              mode="contained"
              labelStyle={styles.label}
              // eslint-disable-next-line react/prop-types
              onPress={() => navigation.navigate('Home')}
              style={styles.btn}>
              <Text style={{color: '#f92e4b'}}>Sign In</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterWith;
