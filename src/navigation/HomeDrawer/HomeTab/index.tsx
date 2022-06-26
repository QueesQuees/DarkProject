import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import HomeScreen from '../../../screens/Home';
import Search from '../../../screens/Search';
import MyPosts from '../../../screens/MyPost';
import {faHome, faSearch, faUserAstronaut} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();
const HomeTab: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Top"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faHome} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <FontAwesomeIcon icon={faSearch} />,
        }}
      />
      <Tab.Screen
        name="My Posts"
        component={MyPosts}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faUserAstronaut} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
