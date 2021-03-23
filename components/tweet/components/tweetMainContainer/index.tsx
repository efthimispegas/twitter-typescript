import React from 'react';
import { Image } from 'react-native';
import { View, Text } from '../../../Themed';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { TweetType, UserType } from '../../../../types';

import styles from './styles';

export type TweetMainContainerProps = {
  // Required props
  tweet: TweetType,
  user: UserType,
  // Optional props
};

const TweetMainContainer = ({ tweet, user }: TweetMainContainerProps) => (
  <View style={{ flex: 1 }}>
    <View style={styles.tweetHeaderWrapper}>
      <View style={styles.tweetHeaderContainer}>
        <Text style={styles.tweetNameText}>{user.name}</Text>
        <Text style={styles.tweetUsernameText}>@{user.username}</Text>
        <Text style={styles.tweetTimestampText}>
          {moment(tweet.createdAt).fromNow().length > 10 ? (
            `${moment(tweet.createdAt).fromNow().substr(0,9)}...`
          ) : (
            moment(tweet.createdAt).fromNow()
          )}
        </Text>
      </View>
      <View style={styles.tweetIconContainer}>
        <Ionicons name="chevron-down" color='grey' size={16} style={styles.tweetMoreIcon} />
      </View>
    </View>
    <View style={styles.tweetContentContainer}>
        <Text style={styles.tweetContentText}>{tweet.content}</Text>
        {!!tweet.image &&
          <Image source={{ uri: tweet.image }} style={styles.tweetImage} />
        }
    </View>
  </View>
);

export default TweetMainContainer;
