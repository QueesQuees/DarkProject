import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {navigate} from '../../navigation/rootNavigation';
import {SING_UP} from '../../navigation/screenNames';
import styles from './index.styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = () => {
    console.log('Login received ');
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={value => setEmail(value)}
        value={email}
      />
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="password"
        onChangeText={value => setPassword(value)}
        value={password}
      />
      <Button title="Login" onPress={() => handleLogin()} />
      <Button title="Don't have an account? Sign Up" onPress={() => navigate(SING_UP)} />
    </View>
  );
};

export default Login;
