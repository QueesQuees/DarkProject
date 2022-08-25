import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  Pressable,
} from 'react-native';
// import {useDispatch} from 'react-redux';
import {navigate} from '../../../navigation/rootNavigation';
import {HOME, LOGIN} from '../../../navigation/screenNames';
import styles from './index.styles';
const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorMessageEmail, setErrorMessageEmail] = useState<string>('');
  const [errorMessagePassword, setErrorMessagePassword] = useState<string>('');
  // const dispatch = useDispatch();

  const handleSignUp = () => {
    navigate(HOME);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        resizeMethod="scale"
        source={require('../../../assets/images/amazing_view.jpg')}>
        <View style={styles.content}>
          <View style={styles.loginView}>
            <Text style={styles.TitleTextLogin}>Let's get start</Text>
            {errorMessage ? <Text style={styles.red}>{errorMessage}</Text> : <></>}

            {/* usename */}
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="User name"
              onChangeText={value => {
                setErrorMessage('');
                setErrorMessageEmail('');
                setEmail(value);
              }}
              value={email}
            />
            {errorMessageEmail ? <Text style={styles.red}>{errorMessageEmail}</Text> : <></>}

            {/* email */}
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email"
              onChangeText={value => {
                setErrorMessage('');
                setErrorMessageEmail('');
                setEmail(value);
              }}
              value={email}
            />
            {errorMessageEmail ? <Text style={styles.red}>{errorMessageEmail}</Text> : <></>}

            {/* password */}
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="New password"
              onChangeText={value => {
                setErrorMessage('');
                setErrorMessagePassword('');
                setPassword(value);
              }}
              value={password}
            />
            {errorMessagePassword ? <Text style={styles.red}>{errorMessagePassword}</Text> : <></>}

            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Confim new password"
              onChangeText={value => {
                setErrorMessage('');
                setErrorMessagePassword('');
                setPassword(value);
              }}
              value={password}
            />
            {errorMessagePassword ? <Text style={styles.red}>{errorMessagePassword}</Text> : <></>}

            <Pressable style={styles.btnLogin} onPress={() => handleSignUp()}>
              <Text>Sign Up</Text>
            </Pressable>
            <Pressable style={styles.btnSignup} onPress={() => navigate(LOGIN)}>
              <Text style={styles.textSignUp}>Joined us before! </Text>
              <Text style={styles.textSignupRed}>Login</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
