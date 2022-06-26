/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  AsyncStorage,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperLightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
  InitialState,
} from '@react-navigation/native';
// import {Provider as StoreProvider} from 'react-redux';
// import {store} from './src/store';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  StackScreenProps,
} from '@react-navigation/stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './src/screens/Home';

const THEME_PERSISTENCE_KEY = 'THEME_TYPE';
type RootStackParamList = {
  Home: NavigatorScreenParams<RootDrawerParamList>;
  NotFound: undefined;
} & {
  [P in keyof typeof SCREENS]: NavigatorScreenParams<{
    Article: {author?: string};
    Albums: undefined;
    Chat: undefined;
    Contacts: undefined;
    NewsFeed: undefined;
    Dialog: undefined;
  }>;
};

const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

const navigationRef = useNavigationContainerRef();
const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  React.useEffect(() => {
    const restoreState = async () => {
      const themeName = 'dark';

      setTheme(themeName === 'dark' ? DarkTheme : DefaultTheme);
    };
    restoreState();
  }, []);
  const [theme, setTheme] = React.useState(DefaultTheme);

  const paperTheme = React.useMemo(() => {
    const t = theme.dark ? PaperDarkTheme : PaperLightTheme;

    return {
      ...t,
      colors: {
        ...t.colors,
        ...theme.colors,
        surface: theme.colors.card,
        accent: theme.dark ? 'rgb(255, 55, 95)' : 'rgb(255, 45, 85)',
      },
    };
  }, [theme.colors, theme.dark]);

  const [initialState, setInitialState] = React.useState<InitialState | undefined>();

  return (
    // <StoreProvider store={store}>
    <PaperProvider theme={paperTheme}>
      <StatusBar
        translucent
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor="rgba(0, 0, 0, 0.24)"
      />
      <NavigationContainer
        ref={navigationRef}
        initialState={initialState}
        onStateChange={state =>
          AsyncStorage?.setItem(NAVIGATION_PERSISTENCE_KEY, JSON.stringify(state))
        }
        theme={theme}
        fallback={<Text>Loading…</Text>}
        documentTitle={{
          formatter: (options, route) =>
            `${options?.title ?? route?.name} - React Navigation Example`,
        }}>
        <Stack.Navigator
          screenOptions={{
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          }}>
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    // </StoreProvider>
  );
};

export default App;
