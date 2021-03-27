import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { createUser } from './graphql/mutations';
import { getUser } from './graphql/queries';

import config from './aws-exports.js';
import tweets from './data/tweets';

Amplify.configure(config);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
    const index = (Math.random() * 4).toFixed(0);
    return tweets[index].user.image;

  };

  const getRandomName = () => {
    const index = (Math.random() * 4).toFixed(0);
    return tweets[index].user.name;
  };

  const updateUser = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser( { bypassCache: true });
      if(userInfo) {
        const { data } = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }));
          if(!data.getUser) {
          // New user is being logged in for the first time
          const newUser = {
            id: userInfo.attributes.sub, // The newly created user in AppSync will have id matching the sub attribute of the Cognito user
            username: userInfo.username,
            email: userInfo.attributes.email,
            name: getRandomName(), // Refactor later maybe
            image: getRandomImage(), // Refactor later maybe
          };
          // Add the newly logged in user to the AppSync database
          await API.graphql(graphqlOperation(createUser, { input: newUser }));
        } else {
          console.log('User already exists in AppSync database');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    updateUser();

  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
