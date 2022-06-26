import {StyleSheet} from 'react-native';

const pd10 = 10;

const styles = StyleSheet.create({
  pdl10: {
    paddingLeft: pd10,
  },
  bottomContain: {
    paddingVertical: 10,
    paddingHorizontal: pd10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  leftBottom: {
    flexDirection: 'row',
  },
  comments: {
    flexDirection: 'row',
  },
  iconHeart: {
    fontSize: 20,
  },
  buttonSave: {
    flexDirection: 'row',
  },
  iconStar: {
    width: 20,
    height: 20,
  },
});

export default styles;
