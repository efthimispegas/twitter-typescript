import React from 'react';
import { View } from '../../components/Themed';
import TweetLeftContainer from './components/tweetLeftContainer';
import TweetMainContainer from './components/tweetMainContainer';
import TweetCTAContainer from './components/tweetCTAContainer';
import { TweetType } from '../../types';

import styles from './styles';

export type TweetProps = {
  // Required props
  tweet: TweetType,
  // Optional props
};

const Tweet = ({ tweet }: TweetProps) => (
  <View style={styles.tweetContainer}>
    <View style={styles.tweetTopContainer}>
      <TweetLeftContainer user={tweet.user} />
      <TweetMainContainer tweet={tweet} user={tweet.user} />
    </View>
    <View style={styles.tweetBottomContainer}>
      <TweetCTAContainer
        meta={{
          comments: tweet.numberOfComments,
          retweets: tweet.numberOfRetweets,
          likes: tweet.numberOfLikes,
        }}
      />
    </View>
  </View>
);

export default Tweet;
