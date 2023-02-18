import { View, StyleSheet } from 'react-native';

const FullView = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default FullView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
