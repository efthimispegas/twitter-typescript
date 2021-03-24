import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { ColorSchemeName, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import NewTweetScreen from '../screens/newTweetScreen';
import NotFoundScreen from '../screens/notFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, /* gestureEnabled: false */ }}>
      <Stack.Screen
        name="Root"
        // component={NewTweetScreen}
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name="NewTweet"
        component={NewTweetScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
