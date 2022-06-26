import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerProfile: {
    position: 'relative',
  },
  imageBg: {
    width: Dimensions.get('window').width,
    height: 150,
    opacity: 0.6,
  },
  viewImageAvatar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
  },
  imageAvatar: {
    borderWidth: 4,
    borderColor: '#FFFFFF',
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  subscribers: {
    flexDirection: 'row',
  },
  newPosts: {
    paddingHorizontal: 15,
  },
  newPostsText: {
    fontSize: 20,
    fontWeight: '900',
  },
  buttonAddPost: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(192,192,192,0.3)',
    borderRadius: 10,
    paddingLeft: 20,
    marginBottom: 10,
  },
  btnText: {
    paddingLeft: 20,
    fontSize: 18,
    // color: '#ffffff',
  },
  lstPosts: {},
});

export default styles;
