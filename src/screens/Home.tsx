import * as React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Searchbar, Text, Avatar, Card, Button} from 'react-native-paper';
import RectBadge from '@components/RectBadge';

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState<String>('');

  const onChangeSearch = (query: String) => setSearchQuery(query);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mt}>
        <View style={[styles.mx, styles.row]}>
          <Avatar.Image
            size={50}
            source={require('../assets/img/profile1.jpg')}
          />
          <View style={styles.ml}>
            <Text variant="titleLarge">Hello, John</Text>
            <Text variant="titleSmall" style={{color: '#8F8F8F'}}>
              What are you looking for?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.mx}>
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={[styles.mx, styles.row, styles.justifyBetween]}>
        <RectBadge IconName="search1" name="Find" />
        <RectBadge IconName="antdesign" name="Live" />
        <RectBadge IconName="search1" name="Find" />
        <RectBadge IconName="search1" name="Find" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  mt: {
    marginTop: 6,
  },
  mx: {
    marginTop: 6,
    marginBottom: 6,
  },
  ml: {
    marginLeft: 10,
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  searchbar: {
    borderRadius: 10,
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
