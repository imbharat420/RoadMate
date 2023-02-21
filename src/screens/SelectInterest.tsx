import Pagination from '../components/Pagination';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Chip } from 'react-native-paper';
// import { COLORS } from '../constants';
import { interests } from './constants';

const { width, height } = Dimensions.get('window');

const InterestText = () => {
  const [interest, setInterest] = useState(interests);
  const [selected, setSelected] = useState([]);
  const setInterestHandler = (el) => {
    console.log(interest);
  };
  return (
    <View style={styles.interests}>
      {interests.map((item) => (
        <Chip
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            borderRadius: 20,
            backgroundColor: item.selected ? '#b84d4d' : '#fff',
            borderColor: '#b84d4d',
            shadowColor: '#b84d4d',
          }}
          key={item.id}
          textStyle={{ color: item.selected ? '#fff' : '#b84d4d' }}
          mode="outlined"
          elevation={1}
          // icon="information"
          avatar={<Image source={item.image} style={{ borderRadius: 0 }} />}
          onPress={() => setInterestHandler(item.name)}
        >
          {item.name}
        </Chip>
      ))}
    </View>
  );
};

const SelectInterest = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Select upto 5 interests</Text>
        <InterestText />
      </View>
    </View>
  );
};

export default SelectInterest;

const styles = StyleSheet.create({
  container: {
    height: '85%',
    marginTop: height * 0.05,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#b84d4d',
    textAlign: 'center',
    marginTop: 20,
  },
  interests: {
    marginTop: 20,
    justifyContent: 'center',
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
