import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import Feed from '../../components/feed';
import NewTweetButton from '../../components/newTweetButton';
import { Text, View } from '../../components/Themed';

import { listTweets } from '../../graphql/queries';
import tweets from '../../data/tweets';

export type HomeScreenProps = {
  // Required props
  // Optional props
  navigation: Object,
  route: Object,
};

export default function HomeScreen(props:HomeScreenProps) {
  const navigation = useNavigation();
  const [ tweetsList, setTweetsList ] = useState(tweets);
  const [ loading, setLoading ] = useState(false);

  const onNewTweetPress = (e: any) => {
    e.preventDefault();
    navigation.navigate('NewTweet', { user: tweets[0].user });
  };

  const fetchTweets = async () => {
    const { data } = await API.graphql(graphqlOperation(listTweets));
    if(data.listTweets.items) {
      setTweetsList([ ...tweets, ...data.listTweets.items ]);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchTweets();
    setLoading(false);
  }, [fetchTweets, setLoading]);

  return (
    <View style={styles.container}>
      <Feed
        fetchTweets={fetchTweets}
        tweets={tweetsList}
        loading={loading}
      />
      <NewTweetButton onPress={onNewTweetPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
