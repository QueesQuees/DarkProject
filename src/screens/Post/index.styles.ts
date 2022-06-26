import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
const pd10 = 10;

const styles = StyleSheet.create({
  pdl10: {
    paddingLeft: pd10,
  },
  wrapper: {
    flex: 1,
  },
  contain: {
    paddingHorizontal: pd10,
  },
  headerPostDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  goBack: {
    width: 30,
    height: 30,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerHeader: {
    // paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameAuthor: {
    paddingLeft: 10,
    fontSize: 25,
    fontWeight: '900',
  },
  register: {
    backgroundColor: 'red',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    marginLeft: 10,
  },
  rightHeader: {
    flexDirection: 'row',
  },
  namePost: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infomationPostDetail: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeDate: {
    width: 15,
    height: 15,
  },
  imagePost: {
    maxWidth: width - pd10 * 2,
    height: 300,
    borderRadius: 5,
  },
  bottomContain: {
    paddingVertical: 15,
    paddingHorizontal: pd10,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  modalContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    margin: 0,
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewHidemodal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  contentComments: {
    flex: 3,
    position: 'relative',
    backgroundColor: '#FFFFFF',
  },
  inputModal: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  strikethrough: {
    height: 1,
    backgroundColor: '#ccc',
  },
  viewInputCommnet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 50,
    borderWidth: 1,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  inputComments: {
    paddingVertical: 5,
    flex: 5,
    paddingHorizontal: 10,
  },
  iconFaTimes: {
    justifyContent: 'center',
    padding: 10,
  },
  listComments: {
    paddingTop: 90,
  },
  oneAccountDetail: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  avatarContain: {
    flex: 1,
  },
  avatarInCommmet: {
    width: 15,
    height: 15,
  },
  nameAccount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrapperDetailOneComment: {
    flex: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 6,
  },
});

export default styles;
