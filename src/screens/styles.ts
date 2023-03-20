import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f92e4b',
    height: '100%',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  flex: {
    gap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mt15: {
    marginTop: 15,
  },
  btn: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
  },
  label: {color: '#f92e4b', fontSize: 15},
  text: {
    color: '#fff',
  },
  poster: {
    height: '40%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    textAlign: 'center',
  },
  surface: {
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
  },
  interests: {
    borderColor: '#000',
    marginTop: 20,
    justifyContent: 'center',
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});

export default styles;
