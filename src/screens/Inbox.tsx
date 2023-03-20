import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Avatar, Text, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const inbox = [
  {
    id: 1,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message: 'wants to connect with you.',
    type: {
      type: 'seen',
      img: require('../assets/img/profile1.jpg'),
    },
  },
  {
    id: 2,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: {
      type: 'notseen',
      icon: 'checkcircle',
    },
  },
  {
    id: 3,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: {
      type: 'notseen',
      icon: 'checkcircleo',
    },
  },
  {
    id: 4,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: {
      type: 'notseen',
      icon: 'checkcircle',
    },
  },
  {
    id: 5,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: {
      type: 'notseen',
      icon: 'checkcircleo',
    },
  },
  {
    id: 6,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: {
      type: 'notseen',
      icon: 'checkcircleo',
    },
  },
  {
    id: 7,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: {
      type: 'notseen',
      icon: 'checkcircle',
    },
  },
  {
    id: 8,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: {
      type: 'notseen',
      icon: 'checkcircle',
    },
  },
];

export default function Inbox() {
  let [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingBottom: 50,
      }}>
      <FlatList
        data={inbox}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => (
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              borderBottomWidth: 0,
            }}>
            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                backgroundColor: '#fff',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Inbox
              </Text>
            </View> */}
            <Searchbar
              style={{
                marginTop: 10,
                marginBottom: 10,
                backgroundColor: '#f4f3f3',
              }}
              elevation={0}
              placeholder="Search"
              value={searchQuery}
              onTextInput={setSearchQuery}
            />
          </View>
        )}
        renderItem={({item}) => (
          <TouchableNativeFeedback>
            <View style={styles.message}>
              <Avatar.Image size={50} source={item.image} />
              <View style={{flex: 1, marginLeft: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                  <Text variant="labelSmall" style={{color: '#ccc'}}>
                    {item.time}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{color: '#ccc', width: width - 120}}>
                    {item.message}
                  </Text>
                  {item.type == undefined ? null : (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      {item.type.type == 'notseen' ? (
                        <Icon
                          name={`${item.type.icon}`}
                          size={12}
                          color={'#ccc'}
                        />
                      ) : (
                        <Avatar.Image size={12} source={item.type.img} />
                      )}
                    </View>
                  )}
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,

    borderBottomColor: '#f1f1f1',
    flexDirection: 'row',
  },
});
