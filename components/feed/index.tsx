import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { TweetType, UserType } from '../../types';
import Tweet from '../../components/tweet';

export type FeedProps = {
  // Required props
  user: UserType | undefined,
  tweets: Array<TweetType>,
  fetchTweets: () => void,
  loading: boolean,
  // Optional props
};

const Feed = ({ user, tweets, fetchTweets, loading }: FeedProps) => {
  return (
    <FlatList
      data={tweets}
      renderItem={({ item }) => (
        <Tweet user={user} tweet={item} />
      )}
      keyExtractor={({ id }) => id}
      refreshing={loading}
      onRefresh={fetchTweets}
    />
  );
};

export default Feed;
