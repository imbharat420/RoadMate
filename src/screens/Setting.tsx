import {
  View,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import {Avatar, Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
const Setting = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Avatar.Image
            size={60}
            style={{marginRight: 10}}
            source={require('../assets/img/profile2.jpg')}
          />
          <View style={styles.center}>
            <Text variant="headlineSmall" style={{color: '#fff'}}>
              Guest
            </Text>
            <Text variant="titleSmall" style={{color: '#fff'}}>
              Welcome to RoadMate
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.listGroup}>
            {/* <View>
              <Text
                variant="titleMedium"
                style={{marginLeft: 10, marginBottom: 3}}>
                Account
              </Text>
            </View> */}
            <TouchableNativeFeedback
              style={{
                width: '100%',
              }}
              onPress={() => {
                navigation.navigate('Sign In');
              }}>
              <View style={styles.listItem}>
                <Icon name="pluscircleo" size={20} color="#8F8F8F" />
                <Text variant="titleSmall" style={{marginLeft: 10}}>
                  Join RoadMate
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              style={{
                width: '100%',
              }}
              onPress={() => {
                navigation.navigate('LoginWith');
              }}>
              <View style={styles.listItem}>
                <Icon name="login" size={20} color="#8F8F8F" />
                <Text variant="titleSmall" style={{marginLeft: 10}}>
                  Sign in
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.listHeading}>
            <Text variant="titleMedium">Help</Text>
          </View>
          <View style={styles.listGroup}>
            <View style={styles.listItem}>
              <Icon name="questioncircleo" size={20} color="#8F8F8F" />
              <Text variant="titleSmall" style={{marginLeft: 10}}>
                Help Center
              </Text>
            </View>
            <View style={styles.listItem}>
              <Icon name="customerservice" size={20} color="#8F8F8F" />
              <Text variant="titleSmall" style={{marginLeft: 10}}>
                Contact Us
              </Text>
            </View>
          </View>
          <View style={styles.listHeading}>
            <Text variant="titleMedium">About</Text>
          </View>
          <View style={styles.listGroup}>
            <View style={styles.listItem}>
              <Icon name="infocirlceo" size={20} color="#8F8F8F" />
              <Text variant="titleSmall" style={{marginLeft: 10}}>
                About Us
              </Text>
            </View>
            <View style={styles.listItem}>
              <Icon name="staro" size={20} color="#8F8F8F" />
              <Text variant="titleSmall" style={{marginLeft: 10}}>
                Rate Us
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 340,
  },
  content: {
    backgroundColor: '#7d7d89',
    padding: 20,
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  listHeading: {
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  listGroup: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    // margin: 10,
    // borderRadius: 10,
  },
  listItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#e0dede',
    borderBottomWidth: 1,
    padding: 10,
    paddingBottom: 15,
    paddingTop: 15,
  },
});
