import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Text, Button} from 'react-native-paper';
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
const ExtraEarn = ({navigation}) => {
  return (
    <View>
      <View
        style={[styles.mt, styles.row, styles.spaceBetween, styles.content]}>
        <Text variant="titleMedium">Watch live</Text>
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
      <View style={[styles.mt, styles.spaceBetween, styles.content]}>
        <View
          style={{
            backgroundColor: '#e7e6e6',
            width: '100%',
            borderRadius: 10,
          }}>
          <View
            style={[
              styles.row,
              {
                padding: 10,
              },
            ]}>
            <Image
              source={require('../assets/img/profile1.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                marginRight: 10,
              }}
            />
            <View
              style={{
                marginRight: 20,
                flexDirection: 'column',
              }}>
              <Text
                variant="titleSmall"
                style={{
                  color: '#565656',
                }}>
                We enjoy the cycling
              </Text>
              <Text
                variant="titleSmall"
                style={{
                  flex: 1,
                  width: '80%',
                  flexWrap: 'wrap',
                  flexShrink: 1,
                  color: '#898989',
                }}>
                Lorem ipsum dolor sit amet, elit, sed do
              </Text>
              <Button
                mode="text"
                style={{
                  borderRadius: 10,
                  padding: 0,
                  width: 100,
                  backgroundColor: '#ac3636',
                }}
                onPress={() => navigation.navigate('LoginWith')}>
                <Text
                  variant="titleSmall"
                  style={{
                    color: '#ffffff',
                    fontWeight: 100,
                    marginRight: 10,
                  }}>
                  watch now
                </Text>
              </Button>
            </View>
          </View>
          <View
            style={[
              styles.row,
              {
                padding: 10,
              },
            ]}>
            <Image
              source={require('../assets/img/profile1.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                marginRight: 10,
              }}
            />
            <View
              style={{
                marginRight: 20,
                flexDirection: 'column',
              }}>
              <Text
                variant="titleSmall"
                style={{
                  color: '#565656',
                }}>
                We enjoy the cycling
              </Text>
              <Text
                variant="titleSmall"
                style={{
                  flex: 1,
                  width: '80%',
                  flexWrap: 'wrap',
                  flexShrink: 1,
                  color: '#898989',
                }}>
                Lorem ipsum dolor sit amet, elit, sed do
              </Text>
              <Button
                mode="text"
                style={{
                  borderRadius: 10,
                  padding: 0,
                  width: 100,
                  backgroundColor: '#ac3636',
                }}
                onPress={() => navigation.navigate('LoginWith')}>
                <Text
                  variant="titleSmall"
                  style={{
                    color: '#ffffff',
                    fontWeight: 100,
                    marginRight: 10,
                  }}>
                  watch now
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExtraEarn;

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
