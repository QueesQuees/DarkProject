import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
const pd15 = 15;

const styles = StyleSheet.create({
  wrapper: {
    // borderTopWidth: 1,
    // borderColor: 'red',
    paddingBottom: pd15,
  },
  strikethrough: {
    height: 2,
    backgroundColor: '#ccc',
    marginBottom: 5,
  },
  content: {
    paddingHorizontal: pd15,
    paddingTop: 10,
  },
  topPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pd15,
    paddingBottom: pd15,
  },
  topContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  authorImageUrl: {
    // width: 30,
    // height: 30,
    // borderRadius: 20,
  },
  shortPost: {
    paddingBottom: 0,
  },
  discreptionShort: {
    fontSize: 14,
  },
  buttonToDetailPage: {
    paddingBottom: 5,
  },
  readMore: {
    fontSize: 18,
    color: 'red',
  },
  authorName: {
    paddingHorizontal: 10,
  },
  authorNameText: {
    fontSize: 14,
  },
  namePost: {
    paddingLeft: 20,
  },
  displayNamePost: {
    fontSize: 16,
    fontWeight: '800',
  },
  // register: {
  // },
  // textTopIndex: {
  //   // paddingLeft: 20,
  //   // color: 'red',
  //   fontWeight: '700',
  // },
  imagePost: {
    width: width - pd15 * 2,
    height: 200,
    borderRadius: 5,
  },
  bottomViewPost: {
    paddingBottom: 5,
    paddingTop: 10,
    paddingHorizontal: pd15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonLover: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberCommnet: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faMessage: {
    width: 30,
    height: 30,
  },
  numberLovedComments: {
    paddingRight: 10,
  },
});

export default styles;
