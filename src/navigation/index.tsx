import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './rootNavigation';
import {HOME_DRAWER, HOME, POST, PROFILE, SEARCH, SETTING, MY_POSTS, MARKET} from './screenNames';
import Home from '../screens/Home';
import Post from '../screens/Post';
import Profile from '../screens/Profile';
import HomeDrawer from './HomeDrawer';
import Search from '../screens/Search';
import Setting from '../screens/Setting';
import MyPosts from '../screens/MyPost';
import Market from '../screens/Market';

export type RootStackParamList = {
  HomeDrawer: undefined;
  [HOME]: undefined;
  [POST]: undefined;
  [PROFILE]: undefined;
  [SEARCH]: undefined;
  [SETTING]: undefined;
  [MY_POSTS]: undefined;
  [MARKET]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

interface NavigationProps {
  initialRouteName: keyof RootStackParamList;
  // initialRouteId?: keyof RootStackParamList;
}
const Navigation: React.FC<NavigationProps> = ({initialRouteName}) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={HOME_DRAWER} component={HomeDrawer} />
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen name={SEARCH} component={Search} />
        <Stack.Screen name={SETTING} component={Setting} />
        <Stack.Screen name={PROFILE} component={Profile} />
        <Stack.Screen name={POST} component={Post} />
        <Stack.Screen name={MY_POSTS} component={MyPosts} />
        <Stack.Screen name={MARKET} component={Market} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
