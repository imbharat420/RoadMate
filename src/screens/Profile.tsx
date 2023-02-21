import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Text, Chip, Button, Title, Paragraph } from 'react-native-paper';
import React from 'react';
import { stories, myInterests } from './constants';
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from 'react-native-paper-tabs';

const { width } = Dimensions.get('window');

const Topbar = () => {
  return (
    <View
      style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}
    >
      <Text variant="displaySmall">Profile</Text>
    </View>
  );
};

const ProfileHeader = () => {
  return (
    <View style={styles.profileContainer}>
      {/* <Text>Cover Photo</Text> */}
      <View style={styles.profileWrapper}>
        <Image
          source={require('../assets/img/profile2.jpg')}
          style={styles.profileImg}
        />
      </View>
      <View style={styles.profileInfo}>
        <Text variant="titleLarge">John Doe</Text>
        <Text variant="labelMedium">New York, USA</Text>
      </View>
    </View>
  );
};

// const ProfileButtons = () => {
//   return (
//     <View style={styles.profileButtons}>
//       <View style={styles.profileButton}>
//         <Text variant="labelMedium">Followers</Text>
//         <Text variant="titleLarge">1.2k</Text>
//       </View>
//       <View style={styles.profileButton}>
//         <Text variant="labelMedium">Following</Text>
//         <Text variant="titleLarge">1.2k</Text>
//       </View>
//       <View style={styles.profileButton}>
//         <Text variant="labelMedium">Posts</Text>
//         <Text variant="titleLarge">1.2k</Text>
//       </View>
//     </View>
//   );
// };

const ProfileButtons = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Button
        mode="contained"
        style={{ backgroundColor: '#b84d4d', flex: 1, margin: 10 }}
        textColor="#fff"
        onPress={() => console.log('Pressed')}
      >
        Connect
      </Button>
      <Button
        mode="contained"
        style={{ backgroundColor: '#b84d4d', flex: 1, margin: 10 }}
        textColor="#fff"
        onPress={() => console.log('Pressed')}
      >
        Message
      </Button>
    </View>
  );
};

const InterestChip = ({ item }) => {
  return (
    <Chip
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        borderRadius: 20,
        paddingLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        backgroundColor: '#ece8e8',
      }}
      elevation={1}
      // icon="information"
      avatar={<Image source={item.image} style={{ borderRadius: 0 }} />}
      onPress={() => setInterestHandler(item.name)}
    >
      {item.name}
    </Chip>
  );
};

const Interests = () => {
  const setInterestHandler = (el) => {
    console.log(el);
  };
  return (
    <View style={styles.interestContainer}>
      <View style={styles.center}>
        <Text variant="titleLarge">Interests</Text>
      </View>
      <View style={styles.interests}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={myInterests}
          renderItem={({ item }) => <InterestChip item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const FeaturedImage = ({ item }) => {
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
            marginTop: 4,
            width: 75,
          }}
        >
          {item.name}
        </Text>
      </View>
    </View>
  );
};

const Featured = () => {
  return (
    <View style={styles.interestContainer}>
      <View style={styles.interests}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={stories}
          renderItem={({ item }) => <FeaturedImage item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const TabsComponent = () => {
  const goTo = useTabNavigation();
  const index = useTabIndex();

  const tabProps = {
    uppercase: true, // true/false | default=true | labels are uppercase
    showTextLabel: true, // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
    iconPosition: 'leading', // leading / top
    style: {
      color: 'red',
    }, // works the same as AppBar in react-native-paper
    theme: {
      colors: {
        primary: '#b84d4d',
        accent: '#f1c40f',
      },
      fonts: {
        medium: {
          fontFamily: 'Roboto',
          fontWeight: 'light',
        },
      },
      scrollablePadding: {
        width: 500,
      },
    }, // works the same as AppBar in react-native-paper
    mode: 'scrollable', // fixed, scrollable | default=fixed}
    // onChangeIndex:
    showLeadingSpace: true, // show leading space in scrollable tabs inside the header
  };
  return (
    <View>
      <View style={{ width: '100%', height: 900 }}>
        <Tabs {...tabProps}>
          <TabScreen label="Posts">
            <Posts />
          </TabScreen>
          <TabScreen label="Mention">
            <ScreenWithText text={'Posts'} />
          </TabScreen>
        </Tabs>
      </View>
    </View>
  );
};

const Posts = () => {
  return (
    <View>
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.postHeaderLeft}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={require('../assets/img/profile1.jpg')}
            />
            <View style={styles.postHeaderLeftText}>
              <Text variant="labelMedium">John Doe</Text>
              <Text variant="labelMedium">2h</Text>
            </View>
          </View>
          <View style={styles.postHeaderRight}>{/* <Text>...</Text> */}</View>
        </View>
        <View style={styles.postHeaderRight}>
          <Text variant="labelMedium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </Text>
        </View>
        <View style={styles.postImage}>
          <Image
            style={{ width: '100%', height: width / 2, borderRadius: 10 }}
            source={require('../assets/img/profile1.jpg')}
          />
        </View>
        <View style={styles.postFooter}>
          <View style={styles.postFooterLeft}>
            <View style={styles.postFooterLeftIcon}>
              <Text>Heart</Text>
              {/* <Icon name="heart" size={20} color="#b84d4d" /> */}
            </View>
            <View style={styles.postFooterLeftIcon}>
              <Text>Comment</Text>
              {/* <Icon name="comment" size={20} color="#b84d4d" /> */}
            </View>
            <View style={styles.postFooterLeftIcon}>
              <Text>Share</Text>
              {/* <Icon name="share" size={20} color="#b84d4d" /> */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const VerticalBorder = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        width: '100%',
        height: 1,
      }}
    />
  );
};

function ScreenWithText({ text }: { text: string }) {
  return (
    <View>
      <Title>{text}asdas</Title>
    </View>
  );
}

export default function Profile() {
  const tabProps = {
    uppercase: true, // true/false | default=true | labels are uppercase
    showTextLabel: false, // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
    iconPosition: 'top', // leading / top
    // style: undefined, // works the same as AppBar in react-native-paper
    // mode: 'scrollable', // fixed, scrollable | default=fixed}
    // onChangeIndex:,
    showLeadingSpace: true, // show leading space in scrollable tabs inside the header
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* <Topbar /> */}
          <ProfileHeader />
          <View style={styles.center}>
            <ProfileButtons />
          </View>
          <Featured />
          <View style={styles.center}>
            <VerticalBorder />
          </View>
          <Interests />
        </View>

        <View style={{ height: 600, flex: 1, marginTop: 20 }}>
          <TabsComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
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
    marginLeft: 20,
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
    width: 80,
    height: 80,
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
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
