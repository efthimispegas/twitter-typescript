import * as React from 'react';
import { FlatList } from 'react-native';
import { TweetType } from '../../types';
import Tweet from '../../components/tweet';

export type FeedProps = {
  // Required props
  tweets: Array<TweetType>,
  // Optional props
};

const Feed = ({ tweets }: FeedProps) => {
  return (
    <FlatList
      data={tweets}
      renderItem={({ item }) => (
        <Tweet tweet={item} />
      )}
      keyExtractor={({ id }) => id}
    />
  );
};

export default Feed;
