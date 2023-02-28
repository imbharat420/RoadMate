import {View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
  
const HomeHeader = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View>
      <Text>Home</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

export default HomeHeader;
