import {View, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import IIcon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');
import {ScrollView, FlatList} from 'react-native-gesture-handler';
const initChanllenges = [
  {
    id: 1,
    title: 'Challenge 1',
    description: 'Description 1',
    image: require('../assets/img/profile1.jpg'),
  },
  {
    id: 2,
    title: 'Challenge 2',
    description: 'Description 2',
    image: require('../assets/img/profile2.jpg'),
  },
];

const ChallengeYourself = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={[styles.mt, styles.row, styles.spaceBetween, styles.content]}>
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
              backgroundColor: '#824f4f',
              borderRadius: 10,
              padding: 10,
              width: width - 100,
              height: 150,
              shadowColor: '#171717',
              shadowOffset: {width: -2, height: 4},
              shadowOpacity: 0.2,
              shadowRadius: 3,
              height: 150,
            }}>
            <View style={[styles.row, styles.spaceBetween]}>
              <View>
                <Text variant="titleMedium">{item.title}</Text>
                <Text variant="titleSmall" style={{color: '#8F8F8F'}}>
                  {item.description}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

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
