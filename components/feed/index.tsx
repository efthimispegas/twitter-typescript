import React from 'react';
import { FlatList } from 'react-native';
import { TweetType } from '../../types';
import Tweet from '../../components/tweet';

export type FeedProps = {
  // Required props
  tweets: Array<TweetType>,
  fetchTweets: () => void,
  loading: boolean,
  // Optional props
};

const Feed = ({ tweets, fetchTweets, loading }: FeedProps) => {
  return (
    <FlatList
      data={tweets}
      renderItem={({ item }) => (
        <Tweet tweet={item} />
      )}
      keyExtractor={({ id }) => id}
      refreshing={loading}
      onRefresh={fetchTweets}
    />
  );
};

export default Feed;
