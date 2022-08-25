import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 1,
  },
  content: {
    height: 400,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  imgBackground: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'center',
  },
  loginView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    borderRadius: 20,
  },
  TitleTextLogin: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  red: {color: 'red'},
  textInput: {
    height: 40,
    width: '90%',
    borderRadius: 20,
    textAlign: 'center',
    marginTop: 15,
    backgroundColor: '#ffffff',
  },
  btnLogin: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#63C7B2',
    borderRadius: 10,
  },
  btnSignup: {
    flexDirection: 'row',
  },
  textSignUp: {
    color: '#ffffff',
  },
  textSignupRed: {
    color: '#63C7B2',
  },
});

export default styles;
