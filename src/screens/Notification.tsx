import {View, FlatList, StyleSheet} from 'react-native';
import {Avatar, Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// const Notification = () => {
//   return (
//     <View>
//       <Text>Notification</Text>
//     </View>
//   );
// };

const Notification = [
  {
    id: 1,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message: 'wants to connect with you.',
  },
  {
    id: 2,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',

    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    name: 'John Doe',
    image: require('../assets/img/profile1.jpg'),
    time: '2 hours ago',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Notifications = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.center, styles.flex, styles.p2]}>
        <View style={styles.wrapper}>
          <Icon name="bell" size={16} color="#383636" />
          <Text variant="titleMedium" style={{marginLeft: 5}}>
            Notifications
          </Text>
        </View>
        <View>
          <Button mode="text" style={styles.clear}>
            <Text variant="labelMedium" style={{color: '#e10a6e'}}>
              Clear All
            </Text>
          </Button>
        </View>
      </View>
      <FlatList
        data={Notification}
        renderItem={({item}) => (
          <View style={styles.notification}>
            <Avatar.Image source={item.image} style={styles.profile} />
            <View style={{marginLeft: 10, justifyContent: 'center'}}>
              <View>
                <Text variant="titleMedium">{item.name}</Text>
                <Text
                  variant="labelMedium"
                  numberOfLines={1}
                  width={250}
                  ellipsizeMode="tail">
                  {item.message}
                </Text>
              </View>

              <Text variant="bodySmall">{item.time}</Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Button
                  mode="contained"
                  style={{
                    backgroundColor: '#e10a47',
                    // height: 30,
                    flex: 1,
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <Text variant="labelMedium" style={{color: '#fff'}}>
                    Accept
                  </Text>
                </Button>
                <Button
                  mode="contained"
                  style={{
                    backgroundColor: '#fff',
                    // height: 30,
                    flex: 1,
                    justifyContent: 'center',
                    borderRadius: 5,
                    marginLeft: 10,
                  }}>
                  <Text variant="labelMedium" style={{color: '#e10a35'}}>
                    Decline
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',

    padding: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdbdb',
  },

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {width: 50, height: 50, marginRight: 10},
  center: {
    width: '100%',
    flexDirection: 'row',
    // padding: 10,

    alignItems: 'center',
    backgroundColor: '#fff',
  },
  flex: {
    justifyContent: 'space-between',
  },
  clear: {
    backgroundColor: '#fff',
    borderWidth: 1,
    justifyContent: 'center',
  },
  p2: {
    padding: 10,
  },
});
