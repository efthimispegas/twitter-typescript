import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import Feed from '../../components/feed';
import NewTweetButton from '../../components/newTweetButton';
import { View } from '../../components/Themed';

import { getUser, listTweets } from '../../graphql/queries';

export type HomeScreenProps = {
  // Required props
  // Optional props
  navigation: Object,
  route: Object,
};

export default function HomeScreen(props:HomeScreenProps) {
  const navigation = useNavigation();
  const [ user, setUser ] = useState();
  const [ tweetsList, setTweetsList ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const onNewTweetPress = (e: any) => {
    e.preventDefault();
    navigation.navigate('NewTweet', { user });
  };

  const fetchTweets = async () => {
    const { data }:any = await API.graphql(graphqlOperation(listTweets));
    if(data.listTweets.items) {
      setTweetsList([ ...data.listTweets.items ]);
    }
  };

  const fetchUser = async () => {
    try {
      const { attributes } = await Auth.currentAuthenticatedUser({ bypassCache: true });
      const { data } = await API.graphql(graphqlOperation(getUser, { id: attributes.sub }))
      if(data.getUser) {
        setUser(data.getUser);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchUser();
    fetchTweets();
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      <Feed
        fetchTweets={fetchTweets}
        tweets={tweetsList}
        loading={loading}
        user={user}
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
