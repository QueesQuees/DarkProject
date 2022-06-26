import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contain: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    paddingLeft: 25,
  },
  imageLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nameAppText: {
    fontSize: 20,
    fontWeight: '900',
  },
  profile: {
    paddingRight: 25,
  },

  modalContain: {
    paddingHorizontal: 25,
    flex: 1,
  },
  buttonClose: {
    paddingVertical: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  closeIcon: {
    padding: 5,
  },
  containerLogin: {
    paddingVertical: 30,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageModalLogo: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  introductionLogin: {
    paddingVertical: 10,
  },
  introductionLoginText: {
    fontSize: 20,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'rgb(89, 134, 219)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'black',
    borderRadius: 5,
  },
  strikethrough: {
    // width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 5,
  },
  viewSetting: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  btnSetting: {
    paddingLeft: 20,
  },
  textSetting: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default styles;
