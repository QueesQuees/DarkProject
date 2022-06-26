import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeTab from './HomeTab';

import Profile from '../../screens/Profile';
import Setting from '../../screens/Setting';
// import {HOME} from '../screenNames';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        swipeEnabled: true,
        drawerType: 'front',
      }}>
      <Drawer.Screen name="Home" component={HomeTab} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
