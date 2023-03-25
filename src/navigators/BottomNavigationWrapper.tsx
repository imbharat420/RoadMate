import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Home from '@screens/Home';
import Inbox from '@screens/Inbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import OctionIcon from 'react-native-vector-icons/Octicons';
import Profile from '@screens/Profile';
import Notification from '@screens/Notification';
import Finder from '@screens/Finder';
import Setting from '@screens/Setting';
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={[styles.tabContent, styles.shadow]}
    onPress={onPress}>
    <View style={styles.tabWrapper}>{children}</View>
  </TouchableOpacity>
);

const initTabNavigation = [
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarLabel: 'Home',
      headerShown: false,
      tabBarIcon: ({color}) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      ),
    },
  },
  {
    name: 'Notification',
    component: Notification,
    options: {
      headerShown: false,
      tabBarLabel: 'Inbox',
      tabBarIcon: ({color}) => (
        <MaterialCommunityIcons name="bell" color={color} size={26} />
      ),
    },
  },

  {
    name: 'Finder',
    component: Finder,
    options: {
      headerShown: false,
      tabBarLabel: 'Inbox',
      tabBarIcon: ({color}) => (
        <AntDesignIcon name="search1" color="#fff" size={26} />
      ),
      tabBarButton: (props: any) => <CustomTabBarButton {...props} />,
    },
  },
  {
    name: 'Inbox',
    component: Inbox,
    options: {
      headerShown: false,
      tabBarLabel: 'Inbox',
      tabBarIcon: ({color}) => (
        <MaterialCommunityIcons name="inbox" color={color} size={26} />
      ),
    },
  },

  {
    name: 'Setting',
    component: Setting,
    options: {
      headerShown: false,
      tabBarLabel: 'Inbox',
      tabBarIcon: ({color}) => (
        <OctionIcon name="gear" color={color} size={20} />
      ),
    },
  },
];

function BottomNavigationWrapper() {
  return (
    <Tab.Navigator
      screenOptions={{
        elevation: 0,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#f80046',
        tabBarStyle: {
          position: 'absolute',
          // bottom: 10,
          // left: 10,
          // right: 10,
          backgroundColor: '#ffffff',
          // borderRadius: 15,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 50,
          ...styles.shadow,
        },
      }}>
      {/* <Tab.Screen name="Settings" component={Inbox} />
      <Tab.Screen name="Home1" component={Home} /> */}
      {initTabNavigation.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={item.options}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomNavigationWrapper;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabContent: {
    top: -25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabWrapper: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: '#f80046',
  },
});
