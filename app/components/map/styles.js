import { StyleSheet } from 'react-native';

const HORIZONTAL_PADDING = 12;
const VERTICAL_PADDING = 6;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingVertical: VERTICAL_PADDING,
  },
  bubble: {
    backgroundColor: 'rgba(0,128,255,1.0)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  button: {
    width: 100,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: 'white'
  }
  //container: {
  //  flex: 1
  //},
  //map: {
  //  position: 'absolute',
  //  top: 0,
  //  left: 0,
  //  right: 0,
  //  bottom: 0
  //},
  //header: {
  //  fontSize: 50,
  //  textAlign: 'center',
  //  color: 'rgba(175, 47, 47, 0.15)',
  //  marginTop: 50,
  //  marginBottom: 100
  //}
});
