import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
// import {useTheme} from 'react-native-paper';

import styles from './home.styles';

import Header from '../../components/header';
import Content from './content';
// import firebase from 'react-native-firebase';
// import RNFirebase from 'react-native-firebase';

const HomeScreen: React.FC = () => {
  const [currentUserX, setCurrentUserX] = useState<any>(null);
  useEffect(() => {
    // const {currentUser} = firebase.auth();
    // setCurrentUserX(currentUser);
  }, []);
  // const {colors} = useTheme();
  return (
    <View style={styles.wrapper}>
      <Text style={{color: 'red'}}>{currentUserX}</Text>
      <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll={true}>
        {<Header />}
        {<Content />}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
