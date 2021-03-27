import { Alert, TextInput, GestureResponderEvent, TouchableWithoutFeedback, Keyboard, Platform, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Auth, API, Storage, graphqlOperation } from 'aws-amplify';
import { Text, View } from '../../components/Themed';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { v4 as uuidv4 } from 'uuid';

import styles from './styles';
import Header from '../../components/header';
import ProfilePicture from '../../components/profilePicture';
import { createTweet } from '../../graphql/mutations';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function NewTweetScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const [image, setImage] = useState(null);
  const [ tweet, setTweet ] = useState<string | undefined>('');
  const [ profilePicture, setProfilePicture ] = useState<string | undefined>('');

  const askPermissionsAsync = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Sorry!',
          'Twitter needs camera roll permissions to upload an image!',
        );
      }
    }
  };

  useEffect(() => {
    // Ask for permission to open camera roll
    askPermissionsAsync();
    // Set user profile picture
    setProfilePicture(route.params.user.image);
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    try {
      // The image is already set and so it exists in our state
      const response = await fetch(image);
      const blob = await response.blob();
      const key = uuidv4();
      const extension = image.split('.')[1];
      await Storage.put(`${key}.${extension}`, blob, {
        contentType: 'image/jpeg',
      });
      console.log('Got here')
      return key;
    } catch (err) {
      console.log('Error uploading file:', err);
    }
  };

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
      if(!!image) {
        const key = await uploadImage();
        const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: false });
        if(userInfo) {
          const newTweet = {
            content: tweet,
            image: `${key}.jpg`,
            userID: userInfo.attributes.sub,
          };
          await API.graphql(graphqlOperation(createTweet, { input: newTweet }));
          navigation.goBack();
          Alert.alert(
            'New tweet created!'
          );
        }
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
          </View>
        </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={pickImage}
              style={styles.uploadImageButton}
            >
              <Text style={styles.uploadImageText}>Select Image</Text>
            </TouchableOpacity>
            <View style={styles.uploadedImageContainer}>
              {image &&
                <Image source={{ uri: image }} style={styles.uploadedImage} />
              }
            </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
