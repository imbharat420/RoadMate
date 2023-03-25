import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import IIcon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');
import {ScrollView, FlatList} from 'react-native-gesture-handler';
const initChanllenges = [
  {
    id: 1,
    title: 'Challenge 1',
    description: '1000 KM Running',
    image: require('../assets/img/running.webp'),
  },
  {
    id: 2,
    title: 'Challenge 2',
    description: '1000 KM Cycling',
    image: require('../assets/img/profile1.jpg'),
  },
  {
    id: 3,
    title: 'Challenge 2',
    description: '1000 KM Cycling',
    image: require('../assets/img/profile1.jpg'),
  },
  {
    id: 4,
    title: 'Challenge 2',
    description: '1000 KM Cycling',
    image: require('../assets/img/cycling.jpg'),
  },
  {
    id: 5,
    title: 'Challenge 2',
    description: '1000 KM Cycling',
    image: require('../assets/img/football.jpg'),
  },
];

const ChallengeYourself = ({navigation}) => (
  <ScrollView>
    <View style={[styles.mt, styles.row, styles.spaceBetween, styles.content]}>
      <Text variant="titleMedium">Challenge Yourself!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LoginWith')}>
        <View
          style={[
            styles.row,
            {
              backgroundColor: '#ffffff',
              borderRadius: 40,
              padding: 10,
            },
          ]}>
          <Text
            variant="titleSmall"
            style={{
              color: '#bb3737',
              fontWeight: 100,
              marginRight: 10,
            }}>
            View All
          </Text>
          <IIcon name="chevron-forward-circle" size={20} color="#bb3737" />
        </View>
      </TouchableOpacity>
    </View>
    <FlatList
      horizontal={true}
      // pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      data={initChanllenges}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={{width: 15}} />}
      ListHeaderComponent={<View style={{width: 20}}></View>}
      ListFooterComponent={<View style={{width: 20}}></View>}
      renderItem={({item}) => (
        <View
          style={{
            backgroundColor: '#f4f3f3',
            borderRadius: 10,
            padding: 6,
            // height: 150,
            shadowColor: '#c4c4c4',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <View style={{backgroundColor:"#fff",padding:3,borderRadius: 10}}>
              <Image
                source={item.image}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'column',
                  marginTop: 10,
                }}>
                <Text variant="labelMedium">{item.description}</Text>
                <Text variant="labelSmall" style={{color: '#c3c2c2',fontSize:8}}>
                  Tap for details >>
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    />
  </ScrollView>
);

export default ChallengeYourself;

const styles = StyleSheet.create({
  content: {
    width: '90%',
    alignSelf: 'center',
  },
  mt: {
    marginTop: 10,
  },
  mx: {
    marginTop: 6,
  },
  ml: {
    marginLeft: 10,
  },
  m: {
    marginTop: 10,
    margin: 5,
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerHalf: {
    flex: 2,
    marginTop: 13,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
  },
  p2: {
    padding: 10,
  },
  surface: {
    padding: 20,
    borderRadius: 10,
    shadowColor: '#f20000',
    shadowOffset: {width: 20, height: 5},
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 8,
  },
  fontThin: {
    fontWeight: '100',
  },
  fontExtralight: {
    fontWeight: '200',
  },
  fontLight: {
    fontWeight: '300',
  },
  fontNormal: {
    fontWeight: '400',
  },
  fontMedium: {
    fontWeight: '500',
  },
  fontSemibold: {
    fontWeight: '600',
  },
  fontBold: {
    fontWeight: '700',
  },
  fwExtrabold: {
    fontWeight: '800',
  },
  fwBlack: {
    fontWeight: '900',
  },
});
