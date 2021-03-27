import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/homeScreen';
import SearchScreen from '../screens/searchScreen';
import NotificationsScreen from '../screens/notificationsScreen';
import MessagesScreen from '../screens/messageScreen';
import ProfilePicture from '../components/profilePicture';
import { BottomTabParamList, HomeParamList, SearchParamList, NotificationsParamList, MessagesParamList } from '../types';
import { getUser } from '../graphql/queries';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false
        }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home-sharp" color={color} size={24} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search-outline" color={color} size={24} />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="notifications-outline" color={color} size={24} />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-mail" color={color} size={24} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string, size: number }) {
  return <Ionicons style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  const [ profilePicture, setProfilePicture ] = useState('');

  const getProfilePicture = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if(userInfo) {
        const { data } = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
        if(data.getUser.image) {
          setProfilePicture(data.getUser.image);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfilePicture();
  }, []);

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Ionicons name="logo-twitter" size={30} color={Colors.light.tint} />
          ),
          headerRight: () => (
            <Ionicons name="star-outline" size={24} color={Colors.light.tint} />
          ),
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeft: () => (
            <ProfilePicture image={profilePicture} size={40} />
          ),
          headerLeftContainerStyle: {
            marginLeft: 15,
          }
        }}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: 'Search' }}
      />
    </SearchStack.Navigator>
  );
}

const NotificationsStack = createStackNavigator<NotificationsParamList>();

function NotificationsNavigator() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{ headerTitle: 'Notifications' }}
      />
    </NotificationsStack.Navigator>
  );
}

const MessagesStack = createStackNavigator<MessagesParamList>();

function MessagesNavigator() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{ headerTitle: 'Messages' }}
      />
    </MessagesStack.Navigator>
  );
}
