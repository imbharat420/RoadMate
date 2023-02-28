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
  PixelRatio,
  Platform,
} from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-paper';
import {stories} from './constants';
import {
  AddIcon,
  CommentIcon,
  DirectIcon,
  HeartIcon,
  InboxIcon,
  MoreIcon,
  SaveIcon,
} from '../assets/svg';
import {useNavigation} from '@react-navigation/native';

const FeaturedImage = ({item}) => {
  return (
    <View style={styles.featuredImages}>
      <Image source={item.image} style={styles.featuredImage} />
      <View>
        <Text
          variant="labelMedium"
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            textAlign: 'center',
            width: '100%',
            fontSize: 10,
          }}>
          {item.name}
        </Text>
      </View>
    </View>
  );
};

const AddStory = () => {
  return (
    <View style={styles.featuredImages}>
      <View>
        <Image source={stories[1].image} style={[styles.featuredImage]} />
        <View style={styles.infoBottom}>
          <AddIcon width={10} height={10} fill="#fff" />
        </View>
      </View>
      <View>
        <Text
          variant="labelMedium"
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            textAlign: 'center',
            // width: 65,
            fontSize: 10,
          }}>
          Your Story
        </Text>
      </View>
    </View>
  );
};

const Featured = () => {
  return (
    <View style={[styles.interestContainer, styles.bb1]}>
      <View style={[styles.interests]}>
        <FlatList
          horizontal
          ListHeaderComponent={
            <>
              <AddStory />
            </>
          }
          showsHorizontalScrollIndicator={false}
          data={stories}
          renderItem={({item}) => <FeaturedImage item={item} />}
          keyExtractor={item => item.id}
          bounces={true}
        />
      </View>
    </View>
  );
};

export default Featured;

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
