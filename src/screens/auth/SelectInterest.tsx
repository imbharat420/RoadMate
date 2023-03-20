import Pagination from '../../components/Pagination';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {Button, Chip} from 'react-native-paper';
// import { COLORS } from '../constants';
import {interests} from '../../components/constants';

const {width, height} = Dimensions.get('window');
import styles from '@screens/styles';
const InterestText = () => {
  const [interest, setInterest] = useState(interests);
  const [selected, setSelected] = useState([]);
  const setInterestHandler = el => {
    console.log(interest);
  };
  return (
    <View style={styles.interests}>
      {interests.map(item => (
        <Chip
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            borderRadius: 20,
            backgroundColor: item.selected ? '#ffffff' : '#fff',
            borderColor: item.selected ? '#000000' : '#ffffff',
            shadowColor: '#b84d4d',
          }}
          key={item.id}
          textStyle={{color: item.selected ? '#d55252' : '#b84d4d'}}
          mode="outlined"
          elevation={1}
          // icon="information"
          avatar={<Image source={item.image} style={{borderRadius: 0}} />}
          onPress={() => setInterestHandler(item.name)}>
          {item.name}
        </Chip>
      ))}
    </View>
  );
};

const SelectInterest = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Select upto 5 interests</Text>
        <InterestText />
        <Button
          mode="contained"
          labelStyle={styles.label}
          onPress={() => navigation.navigate('Home')}
          style={styles.btn}>
          <Text style={{color: '#f92e4b'}}>Next</Text>
        </Button>
      </View>
    </View>
  );
};

export default SelectInterest;
