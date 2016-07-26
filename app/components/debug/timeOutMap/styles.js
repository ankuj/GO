import { StyleSheet } from 'react-native';

const HORIZONTAL_PADDING = 12;
const VERTICAL_PADDING = 6;

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 0
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 30
  },


  //
  //header: {
  //  fontSize: 50,
  //  textAlign: 'center',
  //  color: 'rgba(175, 47, 47, 0.15)',
  //  marginTop: 50,
  //  marginBottom: 100
  //}
});
