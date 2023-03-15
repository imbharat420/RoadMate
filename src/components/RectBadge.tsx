import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
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
        <Icon name={IconName} size={size ?? 20} color={color ?? '#25242b'} />
      </View>
      <Text variant="titleSmall">{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 100,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rect: {
    width: width / 4 - 40,
    height: width / 4 - 40,
    borderRadius: 10,
    backgroundColor: '#e7e7e7',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
