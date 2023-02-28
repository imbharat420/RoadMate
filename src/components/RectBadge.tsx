import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {AddIcon} from '../assets/svg';
import Icon from 'react-native-vector-icons/AntDesign';
import Topbar from '@components/Topbar';

const {width, height} = Dimensions.get('window');

type Props = {
  IconName: string;
  size?: number;
  color?: string;
  name: string;
};

export default function RectBadge({IconName, size, color, name}: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.rect, styles.center]}>
        <Topbar />
        <Icon name={IconName} size={size ?? 40} color={color ?? '#25242b'} />
      </View>
      <Text style={{fontSize: 15, fontWeight: 900}}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rect: {
    width: width / 4 - 30,
    height: width / 4 - 30,
    borderRadius: 10,
    backgroundColor: '#e7e7e7',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
