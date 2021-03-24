import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import Feed from '../../components/feed';
import NewTweetButton from '../../components/newTweetButton';
import { Text, View } from '../../components/Themed';

import tweets from '../../data/tweets';

export type HomeScreenProps = {
  // Required props
  // Optional props
  navigation: Object,
  route: Object,
};

export default function HomeScreen(props:HomeScreenProps) {
  const navigation = useNavigation();
  const onNewTweetPress = (e: any) => {
    e.preventDefault();
    navigation.navigate('NewTweet', { user: tweets[0].user });

    // Keep in case the swipeEnabled option doesn't work
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 1,
    //     routes: [
    //       { name: 'NewTweet' },
    //     ],
    //   })
    // );
  };

  return (
    <View style={styles.container}>
      <Feed tweets={tweets} />
      <NewTweetButton onPress={onNewTweetPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
