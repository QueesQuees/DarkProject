import React from 'react';
import {View, ScrollView} from 'react-native';
// import {useTheme} from 'react-native-paper';

import styles from './home.styles';

import Header from '../../components/header';
import Content from './content';

const HomeScreen: React.FC = () => {
  // const {colors} = useTheme();
  return (
    <View style={styles.wrapper}>
      <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll={true}>
        {<Header />}
        {<Content />}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
