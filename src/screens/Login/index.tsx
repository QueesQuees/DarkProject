import React, {useState} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {User} from '../../models/user';
import {navigate} from '../../navigation/rootNavigation';
import {HOME, SIGN_UP} from '../../navigation/screenNames';
import {setAccessToken, setUser} from '../../store/loginSlice';
import styles from './index.styles';

const user: User = {
  username: 'queesca',
  email: 'queesca@gmail.com',
  password: 'password',
};

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorMessageEmail, setErrorMessageEmail] = useState<string>('');
  const [errorMessagePassword, setErrorMessagePassword] = useState<string>('');
  const dispatch = useDispatch();

  /**handle login and save asscce token */
  const handleLogin = () => {
    if (email && password) {
      if (email === user.email && password === user.password) {
        const accessToken = user + password;
        dispatch(setUser(user));
        dispatch(setAccessToken(accessToken));
        navigate(HOME);
      } else {
        /** show error message*/
        setErrorMessage('Email or password incorrect');
      }
    }

    /** show error message*/
    if (!email) {
      setErrorMessageEmail('Email cannot be blank');
    }
    /** show error message*/
    if (!password) {
      setErrorMessagePassword('Password cannot be blank');
    }
    console.log('Login received ');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        resizeMethod="scale"
        source={require('../../assets/images/amazing_view.jpg')}>
        <View style={styles.content}>
          <View style={styles.loginView}>
            <Text style={styles.TitleTextLogin}>Let's get start</Text>
            {errorMessage ? <Text style={styles.red}>{errorMessage}</Text> : <></>}
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
              placeholder="password"
              onChangeText={value => {
                setErrorMessage('');
                setErrorMessagePassword('');
                setPassword(value);
              }}
              value={password}
            />
            {errorMessagePassword ? <Text style={styles.red}>{errorMessagePassword}</Text> : <></>}

            <Pressable style={styles.btnLogin} onPress={() => handleLogin()}>
              <Text>Login</Text>
            </Pressable>
            <Pressable style={styles.btnSignup} onPress={() => navigate(SIGN_UP)}>
              <Text style={styles.textSignUp}>Don't have an account? </Text>
              <Text style={styles.textSignupRed}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;
