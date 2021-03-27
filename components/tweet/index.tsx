import React, { useEffect, useState } from 'react';
import { View } from '../../components/Themed';
import { API, graphqlOperation } from 'aws-amplify';
import TweetLeftContainer from './components/tweetLeftContainer';
import TweetMainContainer from './components/tweetMainContainer';
import TweetCTAContainer from './components/tweetCTAContainer';
import { TweetType, UserType } from '../../types';
import { createLike, deleteLike } from '../../graphql/mutations';
import { getTweet, listLikes } from '../../graphql/queries';

import styles from './styles';

export type TweetProps = {
  // Required props
  user: UserType | undefined,
  tweet: TweetType,
  // Optional props
};

const Tweet = ({ user, tweet }: TweetProps) => {
  const [ numOfLikes, setNumOfLikes ] = useState(tweet.likes.items.length);

  useEffect(() => {
    // Set initial state of each tweet
    if (tweet && user) {
      fetchLikes();
    }
  }, [tweet, user]);

  const fetchLikes = async () => {
    try {
      const { data } = await API.graphql(graphqlOperation(getTweet, { id: tweet.id }));
      // Get the number of likes on the specific tweet and store them to state
      setNumOfLikes(data.getTweet.likes.items.length);
    } catch (err) {
      console.log(err);
    }
  }

  const onLike = async () => {
    // Create a new like
    const like = {
      userID: user?.id,
      tweetID: tweet.id,
    };
    try {
      await API.graphql(graphqlOperation(createLike, { input: like }));
      setNumOfLikes(numOfLikes+1);
     } catch (err) {
      console.log(err);
    }
  };

  const onDislike = async (like: Object) => {
    // Delete found like
    try {
      await API.graphql(graphqlOperation(deleteLike, { input: { id: like.id } }));
      setNumOfLikes(numOfLikes-1);
     } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.tweetContainer}>
      <View style={styles.tweetTopContainer}>
        <TweetLeftContainer user={tweet.user} />
        <TweetMainContainer tweet={tweet} user={tweet.user} />
      </View>
      <View style={styles.tweetBottomContainer}>
        <TweetCTAContainer
          tweet={tweet}
          user={user}
          meta={{
            comments: tweet.numberOfComments,
            retweets: tweet.numberOfRetweets,
            likes: numOfLikes,
          }}
          onLike={onLike}
          onDislike={onDislike}
        />
      </View>
    </View>
  );
};

export default Tweet;
