import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';
import {navigate} from '../../../navigation/rootNavigation';
import {HOME, SING_UP} from '../../../navigation/screenNames';
const Loading: React.FC = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      navigate(user ? HOME : SING_UP);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
