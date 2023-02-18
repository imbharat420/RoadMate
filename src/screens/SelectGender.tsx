//generate react-native component for gender selection with image UI for select gender

import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class GenderSelection extends Component {
  constructor(props) {
    super(props);
    this.state = { gender: '' };
  }

  selectGender = (gender: string) => {
    this.setState({ gender });
  };

  render() {
    const maleImage = require('../assets/male.png'); // image path of male icon
    const femaleImage = require('../assets/female.png'); // image path of female icon

    return (
      <View style={styles.container}>
        <Image
          source={maleImage}
          style={styles.imageStyle}
          onPress={() => this.selectGender('Male')}
        />

        <Image
          source={femaleImage}
          style={styles.imageStyle}
          onPress={() => this.selectGender('Female')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  imageStyle: {
    width: 100,

    height: 100,
  },
});
