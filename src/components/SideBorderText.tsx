import {Text, View} from 'react-native';

const SideBorderText = ({text, width}) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 1 / 2, backgroundColor: '#fff'}} />
      <View>
        <Text style={{width, textAlign: 'center', color: '#fff'}}>{text}</Text>
      </View>
      <View style={{flex: 1, height: 1 / 2, backgroundColor: '#fff'}} />
    </View>
  );
};

export default SideBorderText;
