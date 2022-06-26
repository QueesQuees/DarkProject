import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {navigate} from '../../navigation/rootNavigation';
import {POST} from '../../navigation/screenNames';

import styles from './index.styles';

const Profile: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <Text> Profile </Text>
      <Pressable onPress={() => navigate(POST)}>
        <Text>go post</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
