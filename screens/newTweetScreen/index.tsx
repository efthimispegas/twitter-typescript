import { Alert, TextInput, GestureResponderEvent, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from '../../components/Themed';
import Header from '../../components/header';
import React, { useEffect, useState } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';

import styles from './styles';
import ProfilePicture from '../../components/profilePicture';
import { createTweet } from '../../graphql/mutations';

export default function NewTweetScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const [ tweet, setTweet ] = useState<string | undefined>('');
  const [ imageUrl, setImageUrl ] = useState<string | undefined>('');
  const [ profilePicture, setProfilePicture ] = useState<string | undefined>('');

  useEffect(() => {
    setProfilePicture(route.params.user.image);
  }, []);

  const onTweetPress = (e: GestureResponderEvent) => {
    e.preventDefault();
    Alert.alert(
      'Create new tweet?',
      'You are about to share a new tweet.\nAre you sure you want to continue?',
      [
        { text: 'Continue', style: 'cancel', onPress: () => onPostNewTweet() },
        { text: 'Cancel', style: 'destructive', onPress: () => console.log('Cancel was pressed.') },
      ]
    );
  };

  const onPostNewTweet = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: false });
      if(userInfo) {
        const newTweet = {
          content: tweet,
          image: imageUrl,
          userID: userInfo.attributes.sub,
        };
        await API.graphql(graphqlOperation(createTweet, { input: newTweet }));
        navigation.goBack();
        Alert.alert(
          'New tweet created!'
        );
      }
    } catch (err) {
      console.log(err);
    }

  };

  const onClosePress = (e: GestureResponderEvent) => {
    e.preventDefault();
    Alert.alert(
      'Delete tweet?',
      'You are in the middle of a new tweet.\nAre you sure you want to discard changes and go back?',
      [
        { text: 'Continue', style: 'cancel', onPress: () => console.log('Continue was pressed.') },
        { text: 'Leave', style: 'destructive', onPress: () => navigation.goBack() },
      ]
    );
  };

  const onChangeTweetText = (text: string) => {
    setTweet(text);
  };

  const onChangeImageUrl = (text: string) => {
    setImageUrl(text);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View  style={styles.newTweetWrapper}>
        <Header
          onClosePress={onClosePress}
          onTweetPress={onTweetPress}
        />
        <View style={styles.newTweetContainer}>
          <ProfilePicture image={profilePicture} size={50} />
          <View style={styles.inputsContainer}>
            <TextInput
              multiline
              value={tweet}
              maxLength={300}
              numberOfLines={9}
              onChangeText={onChangeTweetText}
              placeholder='Add tweet here'
              style={styles.textInputContainer}
            />
            <TextInput
              value={imageUrl}
              onChangeText={onChangeImageUrl}
              placeholder='Add image url here'
              style={styles.imageInputContainer}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
