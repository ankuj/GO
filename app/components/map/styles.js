import { StyleSheet } from 'react-native';

const HORIZONTAL_PADDING = 12;
const VERTICAL_PADDING = 6;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    color: 'rgba(175, 47, 47, 0.15)',
    marginTop: 50,
    marginBottom: 100
  }
});
