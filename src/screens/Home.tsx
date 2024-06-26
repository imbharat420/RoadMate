import * as React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Searchbar,
  Text,
  Avatar,
  Card,
  Button,
  Surface,
  ProgressBar,
  MD3Colors,
} from 'react-native-paper';
import RectBadge from '@components/RectBadge';
import Map from '@components/Map';
import Icon from 'react-native-vector-icons/AntDesign';

import EnIcon from 'react-native-vector-icons/Entypo';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import ChallengeYourself from '@components//ChallengeYourself';
import ExtraEarn from '@components/ExtraEarn';

const {width, height} = Dimensions.get('window');

export default function Home({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState<String>('');

  const onChangeSearch = (query: String) => setSearchQuery(query);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#efe7e7',
          zIndex: -1,
        }}>
        <Map />
      </View>
      <BottomSheet
        index={0}
        snapPoints={['25%', '100%']}
        onChange={index => {
          console.log('BottomSheet index changed to: ', index);
        }}>
        <BottomSheetView style={styles.lowerHalf}>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: '#ffffff',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            <View style={[styles.mt]}>
              <View
                style={[
                  styles.content,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#f4f2f2',
                    borderRadius: 40,
                    padding: 10,
                    borderColor: '#eae3e3',
                    borderWidth: 1,
                    shadowColor: '#171717',
                    shadowOffset: {width: -2, height: 4},
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                  },
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Avatar.Image
                    size={50}
                    source={require('../assets/img/profile1.jpg')}
                  />
                  <View style={{marginLeft: 10}}>
                    <Text variant="titleMedium">Hello, John</Text>
                    <Text variant="titleSmall" style={{color: '#8F8F8F'}}>
                      Find RoadMate Near You
                    </Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('LoginWith')}>
                    <View
                      style={{
                        backgroundColor: '#ffffff',
                        borderRadius: 40,
                        padding: 10,
                      }}>
                      <Icon name="search1" size={30} color="#bb3737" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <ChallengeYourself navigation={navigation} />
              <ExtraEarn navigation={navigation} />
              <View
                style={{
                  height: 50,
                }}></View>
            </View>
          </ScrollView>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

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

// import Post from '../components/Post';
// import Topbar from '../components/Topbar';
// import Featured from '../components/Featured';
// import {stories} from '@components//constants';
// export default function Home() {
//   return (
//     <FlatList
//       ListHeaderComponent={
//         <>
//           <Topbar />
//           <Featured />
//         </>
//       }
//       data={stories}
//       renderItem={({item}) => <Post item={item} />}
//       keyExtractor={item => item.id}
//     />
//   );
// }
// <View style={[styles.mt, styles.content, {flex: 0.4}]}>
//   <View style={[styles.mx, styles.row]}>
//     <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
//       <Avatar.Image
//         size={50}
//         source={require('../assets/img/profile1.jpg')}
//       />
//     </TouchableOpacity>
//     <View style={styles.ml}>
//       <Text variant="titleMedium">Hello, John</Text>
//       <Text variant="titleSmall" style={{color: '#8F8F8F'}}>
//         What are you looking for?
//       </Text>
//     </View>
//   </View>
//   {/* <View
//     style={[styles.mt, styles.row, styles.center, styles.justifyBetween]}>
//     <RectBadge IconName="search1" name="Find" />
//     <RectBadge IconName="search1" name="Live" />
//     <RectBadge IconName="search1" name="Fun" />
//     <RectBadge IconName="search1" name="Work" />
//   </View> */}
// </View>
// <View style={[styles.lowerHalf, styles.mx, styles.mt, {flex: 3}]}>
//   <View style={[styles.justifyBetween, styles.p2]}>
//     <View style={[styles.center, styles.row, styles.spaceBetween]}>
//       <Icon name="left" size={15} color="#8F8F8F" />
//       <Button
//         mode="text"
//         icon="calendar"
//         contentStyle={{flexDirection: 'row-reverse'}}
//         compact={true}
//         onPress={() => console.log('Pressed')}>
//         Tuesday
//       </Button>
//       <Icon name="right" size={15} color="#8F8F8F" />
//     </View>
//   </View>
//   <View style={[styles.content]}>
//     <Text variant="headlineMedium">Interactions</Text>
//     <Text variant="bodySmall">
//       Follow these actions and get 1 step closer to your goal
//     </Text>
//   </View>
//   <Surface
//     style={[styles.mt, styles.surface, styles.content]}
//     elevation={1}>
//     <Text variant="bodySmall">Track Your Points</Text>
//     <Text variant="bodyLarge" style={{fontWeight: 'bold'}}>
//       1800 Points remainig
//     </Text>
//     <View style={styles.mt}>
//       <ProgressBar progress={0.5} color={MD3Colors.neutralVariant30} />
//     </View>
//   </Surface>
//   <Surface
//     style={[styles.mt, styles.surface, styles.content, styles.row]}
//     elevation={1}>
//     <View style={[styles.row, styles.spaceBetween]}>
//       <View style={[styles.center, styles.row]}>
//         <Icon name="clockcircleo" size={15} color="#8F8F8F" />
//         <Text
//           variant="bodySmall"
//           style={{marginLeft: 5, fontWeight: 800}}>
//           Check your progress
//         </Text>
//       </View>
//     </View>
//   </Surface>
//   <View style={[styles.row, styles.content]}>
//     <Surface
//       style={[styles.m, styles.surface, styles.row, {flex: 1}]}
//       elevation={1}>
//       <View style={[styles.row, styles.justifyBetween]}>
//         <View style={[styles.center, styles.row]}>
//           <Icon name="setting" size={15} color="#8F8F8F" />
//           <Button
//             mode="text"
//             compact={true}
//             onPress={() => navigation.navigate('Gender')}>
//             <Text variant="bodySmall" style={{marginLeft: 5}}>
//               Add Details
//             </Text>
//           </Button>
//         </View>
//       </View>
//     </Surface>
//     <Surface
//       style={[styles.m, styles.surface, styles.row, {flex: 1}]}
//       elevation={1}>
//       <View style={[styles.row, styles.justifyBetween]}>
//         <View style={[styles.center, styles.row]}>
//           <Icon name="hearto" size={15} color="#8F8F8F" />
//           <Button
//             mode="text"
//             compact={true}
//             onPress={() => navigation.navigate('Select Interest')}>
//             <Text variant="bodySmall" style={{marginLeft: 5}}>
//               Add Interest
//             </Text>
//           </Button>
//         </View>
//       </View>
//     </Surface>
//   </View>
//   <View style={[styles.row, styles.content, styles.mt]}>
//     <Button
//       icon="login"
//       mode="outlined"
//       onPress={() => navigation.navigate('Sign In')}
//       style={[
//         {borderColor: '#8F8F8F', borderWidth: 1, flex: 1, marginRight: 5},
//       ]}>
//       Login
//     </Button>
//     <Button
//       icon="link"
//       mode="outlined"
//       onPress={() => navigation.navigate('LoginWith')}
//       style={[
//         {borderColor: '#8F8F8F', borderWidth: 1, flex: 1, marginLeft: 5},
//       ]}>
//       Signup
//     </Button>
//   </View>
// </View>
