import React, { useEffect, useState } from 'react';
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
  onLike: () => void,
  onDislike: (tweet: TweetType) => void,
  // Optional props
};

const TweetCTAContainer = ({ user, tweet, meta, onLike, onDislike }: TweetCTAContainerProps) => {
  const [ isLiked, setIsLiked ] = useState(false);

  useEffect(() => {
    if(user && tweet) {
      searchLikedTweets();
    }
  }, [user, tweet]);

  const searchLikedTweets = () => {
    const found = tweet.likes.items.find(item => item.userID === user.id);
    if(found) {
      setIsLiked(true);
    }
    return found;
  };

  const handlePress = () => {
    const found = searchLikedTweets();
    if(!isLiked) {
      onLike();
    } else {
      onDislike(found);
    }
    setIsLiked(!isLiked);
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
          onPress={handlePress}
        >
          {isLiked ? (
            <Ionicons name='heart' size={22} color={Colors.icon.liked} />
          ) : (
            <Ionicons name='heart-outline' size={22} color={Colors.icon.disliked} />
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
