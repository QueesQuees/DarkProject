import React from 'react';
import Navigation from './navigation';
import {store} from './store';
import {Provider} from 'react-redux';
import {SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context';
import {HOME_DRAWER} from './navigation/screenNames';

const BootScreen: React.FC = () => {
  const initialRouteName = HOME_DRAWER;
  // const initialRouteId = 'HomeDrawer';

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Navigation initialRouteName={initialRouteName} />
    </SafeAreaProvider>
  );
};

const EntryPoint: React.FC = () => {
  return (
    <Provider store={store}>
      <BootScreen />
    </Provider>
  );
};

export default EntryPoint;
