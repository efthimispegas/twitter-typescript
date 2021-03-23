import * as React from 'react';
import { FlatList } from 'react-native';
import { TweetType } from '../../types';
import Tweet from '../../components/tweet';

import tweets from '../../data/tweets';

export type FeedProps = {
  // Required props
  tweet: TweetType,
  // Optional props
};

const Feed = () => {
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
