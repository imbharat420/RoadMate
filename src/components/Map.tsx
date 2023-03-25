import {StyleSheet, View, Image} from 'react-native';
import {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import mapStyle from '../config/mapstyle.json';
import {HeartIcon} from '@svg/index';
import {Svg, Text} from 'react-native-svg';

let markers = [
  {
    id: 1,
    name: 'Joe',
    title: 'Miami',
    description: 'Miami Swiming pool',
    image: require('../assets/img/mountain.jpeg'),
    cords: {
      latitude: 37.78095,
      longitude: -122.4324,
    },
    callout: {
      image: require('../assets/img/avatar.png'),
      title: 'Swiming pool',
      description: 'Miami Swiming pool',
    },
    hide: 15,
  },

  {
    id: 2,
    name: 'Joe',
    title: 'Miami',
    description: 'Miami Swiming pool',
    image: require('../assets/img/cycling.jpg'),
    type: <HeartIcon />,
    cords: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    callout: {
      image: require('../assets/img/cycling.jpg'),
      title: 'Swiming pool',
      description: 'Miami Swiming pool',
    },
    hide: 15,
  },
];

const Map = () => {
  const [hideMarker, setHideMarker] = useState(0);
  const [markerSize, setMarkerSize] = useState(1000);
  const handleRegionChange = region => {
    const zoomLevel = Math.round(Math.log2(360 / region.longitudeDelta));
    if (zoomLevel > 13) {
      setHideMarker(zoomLevel);
    }
    const mzoomLevel = Math.round(Math.log2(360 / region.longitudeDelta));
    if (mzoomLevel > 13) {
      setMarkerSize(50);
    } else {
      setMarkerSize(100);
    }
  };
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        userInterfaceStyle="dark"
        compassOffset={{x: 10, y: 10}}
        showsCompass={true}
        customMapStyle={mapStyle}
        onRegionChange={handleRegionChange}>
        {markers.map(marker => (
          <RenderMarker marker={marker} hideMarker={hideMarker} />
        ))}
      </MapView>
    </View>
  );
};
export default Map;

const RenderMarker = ({marker, hideMarker}) => {
  console.log(marker.hide, hideMarker);
  return (
    <>
      {marker.hide < hideMarker && (
        <Marker key={marker.id} coordinate={marker.cords}>
          <CustomMarker
            title={marker.title}
            description={marker.description}
            image={marker.image}
          />
        </Marker>
      )}
    </>
  );
};

const CustomMarker = ({title, description, image, type}) => (
  <View style={styles.storyContainer}>
    <View style={{alignItems: 'center', margin: 10}}>
      <Image source={image} style={styles.storyImg} />
      <View style={styles.iconContainer}>
        <HeartIcon width={20} height={20} color="#ffffff" />
      </View>
    </View>
    {/* <Text style={styles.storyText}>{title}</Text> */}

    {/* <Text style={styles.storyText}>{description}</Text>
    <Text style={styles.storyText}>{description}</Text> */}
    <View
      style={{
        marginTop: 20,
      }}>
      <Svg height="60" width="200">
        <Text
          fill="#fff"
          stroke="#b84d4d"
          fontSize="20"
          fontWeight="bold"
          x="100"
          y="20"
          textAnchor="middle">
          {description}
        </Text>
      </Svg>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  storyContainer: {
    alignItems: 'center',
    // width: 300,
    // height: 500,

    flex: 1,
  },
  storyImg: {
    borderColor: '#b84d4d',
    borderWidth: 4,
    borderRadius: 10,
    width: 100,
    height: 160,
    // borderRadius: 50,
  },
  iconContainer: {
    // position: 'absolute',
    // bottom: 0,
    backgroundColor: '#b84d4d',
    borderColor: '#b84d4d',
    borderWidth: 4,
    borderRadius: 25,
    position: 'absolute',
    bottom: -20,
    width: 40,
    height: 40,
    // marginTop: '-25%', // negative half of height
    justifyContent: 'center',
    alignItems: 'center',
    // transform: [{translateX: 50}, {translateY: 50}],
  },
  storyText: {
    marginTop: 10,
    // textShadowColor: '#fff',
    // textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 10,

    color: '#b84d4d',
    fontSize: 20,
    fontWeight: 900,
    textAlign: 'center',
    // backgroundColor: '#fff',
    // padding: 10,
    // borderRadius: 20,
    // borderColor: '#b84d4d',
    // borderWidth: 4,
  },
});

/*

<Image
          source={require('../assets/img/avatar2.png')}
          style={{width: 100, height: 100}}
        />



 {markers.map(
          (marker, index) =>
            !marker.hide < hideMarker && (
              <Marker
                key={marker.id + index}
                coordinate={marker.cords}
                title={marker.title}
                description={marker.description}
                image={marker.image}
                calloutVisible={true}
                identifier={marker.id.toString()}
                style={{width: markerSize, height: markerSize}}>
                <Callout>
                  {style={{width: 100, height: 100}}}
                  <View>
                    <Text>{marker.callout.title}</Text>
                  </View>
                </Callout>
              </Marker>
            ),
        )}*/
