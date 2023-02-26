import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableNativeFeedback,
  useWindowDimensions,
} from 'react-native';
import {Text, Chip, Button, Title, Paragraph} from 'react-native-paper';
import React from 'react';

import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from 'react-native-paper-tabs';
import {
  AddIcon,
  CommentIcon,
  DirectIcon,
  HeartIcon,
  InboxIcon,
  MoreIcon,
  SaveIcon,
} from '../assets/svg';

import {stories} from '../screens/constants';

import {useNavigation} from '@react-navigation/native';
import timeAgo from '../utils/timeAgo';

const {width, height} = Dimensions.get('window');

// Sizes based on Google Nexus 5 on genymotion
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 592;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => {
  if (Platform.OS === 'ios') {
    factor = PixelRatio.get();
  }

  return size + (scale(size) - size) * factor;
};

const Post = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.postContainer}>
      <View style={styles.center}>
        <View style={styles.postHeader}>
          <View style={styles.postHeaderLeft}>
            <TouchableNativeFeedback
              onPress={() => navigation.navigate('Profile')}>
              <Image
                source={item.image}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 500,
                  marginRight: 10,
                }}
              />
            </TouchableNativeFeedback>
            <View>
              <Text variant="labelMedium" style={{fontSize: 12}}>
                {item.name}
              </Text>
            </View>
          </View>
          <View>
            <Text variant="labelMedium" style={{fontSize: 12}}>
              <MoreIcon />
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.postBody}>
        <Image
          source={item.image}
          style={{
            width: width,
            height: moderateScale(height / 2),
            marginTop: 10,
          }}
        />
      </View>
      <View style={styles.center}>
        <View style={styles.postFooter}>
          <View style={styles.postFooterLeft}>
            <View style={styles.postFooterLeftItem}>
              <HeartIcon width={20} />
            </View>
            <View style={styles.postFooterLeftItem}>
              <CommentIcon width={20} />
            </View>
            <View style={styles.postFooterLeftItem}>
              <DirectIcon width={20} />
            </View>
          </View>
          <View>
            <SaveIcon width={18} />
          </View>
        </View>
        <View style={styles.timeAgo}>
          <Text style={{fontSize: 10, fontWeight: 500, color: '#D3D3D3'}}>
            {timeAgo(item.timeAgo)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Posts = () => {
  return (
    <View style={[styles.postsContainer]}>
      <FlatList
        data={stories}
        renderItem={({item}) => <Post item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postsContainer: {
    backgroundColor: '#fff',
  },
  bb1: {
    borderBottomWidth: 1,
    borderBottomColor: '#e4e2e2',
  },
  spaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoBottom: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: '#b84d4d',
    borderRadius: 500,
    padding: 5,
  },
  center: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileWrapper: {
    padding: 10,
    width: 150,
    height: 150,
    borderRadius: 500,
    backgroundColor: '#e4e2e2',
  },
  profileImg: {
    width: 150 - 20,
    height: 150 - 20,
    borderRadius: 500,
    // borderWidth: 5,
    // borderColor: '#ff0080',
  },
  profileInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  interestContainer: {
    marginTop: 10,
  },
  interests: {
    marginTop: 9,
    marginLeft: 8,
    gap: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  profileButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  profileButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuredImages: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 0,
  },
  featuredImage: {
    objectFit: 'cover',
    aspectRatio: 1,
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  tabsContainer: {
    width: '100%',
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  tabBtn: {
    width: '100%',
    margin: 0,
    padding: 0,
    borderRadius: 0,
    flex: 1,
  },
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // padding: 10,
    // backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 10,
  },
  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postHeaderLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  postHeaderLeftText: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
  },
  postHeaderRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  postBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  postFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  postFooterLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  postImage: {
    marginTop: 10,
    marginBottom: 10,
  },
  postFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  postFooterLeftIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },

  postFooterLeftItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});
