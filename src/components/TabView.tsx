import {View, useWindowDimensions} from 'react-native';
import {Text, Chip, Button, Title, Paragraph} from 'react-native-paper';
import React from 'react';
import {stories, myInterests} from './constants';
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from 'react-native-paper-tabs';

import {useNavigation} from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import Posts from './Posts';

const renderScene = SceneMap({
  first: Posts,
  second: Posts,
});

const TabComp = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Post'},
    {key: 'second', title: 'Mention'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={{backgroundColor: '#fff'}}
          labelStyle={{color: 'black', fontSize: 14}}
        />
      )}
    />
  );
};

export default TabComp;
