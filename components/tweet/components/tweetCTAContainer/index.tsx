import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { EvilIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import styles from './styles';
import { View, Text } from '../../../Themed';
import Colors from '../../../../constants/Colors';
import { listLikes } from '../../../../graphql/queries';
import { MetaType, TweetType, UserType } from '../../../../types';

export type TweetCTAContainerProps = {
  // Required props
  user: UserType,
  tweet: TweetType,
  meta: MetaType,
  like: Object | null,
  setLike: Dispatch<SetStateAction<Object | null>>,
  onLike: () => void,
  // Optional props
};

const TweetCTAContainer = ({ user, tweet, meta, like, setLike, onLike }: TweetCTAContainerProps) => {

  useEffect(() => {
    if(user && tweet) {
      isTweetLiked();
    }
  }, [tweet, user]);

  const isTweetLiked = () => {
    const found = tweet.likes.items.find(item => {
      if (item.userID === user.id) {
        // console.log(`Checking if tweet is liked by user on mount...\n Tweet: ${tweet.id} is liked by user`)
        return true;
      }
    });
    if(found) {
      setLike(found);
    }
  };

  return (
    <View style={styles.tweetCTAWrapper}>
      <View style={styles.CTAContainer}>
        <EvilIcons name='comment' size={26} color={Colors.grey.tint} />
        <Text style={styles.CTAText}>{meta.comments}</Text>
      </View>
      <View style={styles.CTAContainer}>
        <MaterialCommunityIcons name='twitter-retweet' size={26} color={Colors.grey.tint} />
        <Text style={styles.CTAText}>{meta.retweets}</Text>
      </View>
      <View style={styles.CTAContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onLike}
        >
          {!like ? (
            <Ionicons name='heart-outline' size={22} color={Colors.icon.disliked} />
          ) : (
            <Ionicons name='heart' size={22} color={Colors.icon.liked} />
          )}
        </TouchableOpacity>
        <Text style={styles.CTAText}>{meta.likes}</Text>
      </View>
      <View style={styles.CTAContainer}>
        <Ionicons name='share-social-outline' size={22} color={Colors.grey.tint} />
      </View>
    </View>
  );
};

export default TweetCTAContainer;
