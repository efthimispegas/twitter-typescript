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
  user: UserType,
  tweet: TweetType,
  // Optional props
};

const Tweet = ({ user, tweet }: TweetProps) => {
  const [ numOfLikes, setNumOfLikes ] = useState<number>(tweet.likes.items.length);
  const [ like, setLike ] = useState<Object | null>(null);

  useEffect(() => {
    // Set initial state of each tweet
    if (tweet && user) {
      // Get number of likes and set likes state
      fetchLikes();
    }
  }, [tweet, user, tweet.likes.items.length]);

  const fetchLikes = async () => {
    try {
      const { data } = await API.graphql(graphqlOperation(getTweet, { id: tweet.id }));
      // Get the number of likes on the specific tweet and store them to state
      setNumOfLikes(data.getTweet.likes.items.length);
    } catch (err) {
      console.log(err);
    }
  };

  const onLike = async () => {
    // Create a new like
    const newLike = {
      userID: user?.id,
      tweetID: tweet.id,
    };
    try {
      if(!like) {
        // Like
        const { data } = await API.graphql(graphqlOperation(createLike, { input: newLike }));
        setNumOfLikes(numOfLikes+1);
        setLike(data.createLike);
      } else {
        // Dislike
        await API.graphql(graphqlOperation(deleteLike, { input: { id: like.id } }));
        setNumOfLikes(numOfLikes-1);
        setLike(null);
      }
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
          like={like}
          onLike={onLike}
          setLike={setLike}
        />
      </View>
    </View>
  );
};

export default Tweet;
