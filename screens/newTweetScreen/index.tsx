import { Alert, TextInput, GestureResponderEvent, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from '../../components/Themed';
import Header from '../../components/header';
import React, { useEffect, useState } from 'react';

import styles from './styles';
import ProfilePicture from '../../components/profilePicture';

export type NewTweetScreenProps = {
  // Required props
  // Optional props
};

export default function NewTweetScreen(props: NewTweetScreenProps) {
  const navigation = useNavigation();
  const route = useRoute();

  const [ tweet, setTweet ] = useState<string | undefined>('');
  const [ imageUrl, setImageUrl ] = useState<string | undefined>('');

  useEffect(() => {
    console.log('===============');
    console.log('[NewTweetScreen: route',route);
    console.log('===============');
  }, []);

  const onTweetPress = (e: GestureResponderEvent) => {
    e.preventDefault();
    console.log('===============');
    console.log('[NewTweetScreen]:', 'New tweet created!');
    console.log('===============');
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
          <ProfilePicture image={route.params.user.image} size={50} />
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
