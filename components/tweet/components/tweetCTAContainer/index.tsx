import React from 'react';
import { View, Text } from '../../../Themed';
import { EvilIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import Colors from '../../../../constants/Colors';
import { MetaType } from '../../../../types';
import styles from './styles';

export type TweetCTAContainerProps = {
  // Required props
  meta: MetaType,
  // Optional props
};

const TweetCTAContainer = ({ meta }: TweetCTAContainerProps) => (
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
      <Ionicons name='heart-outline' size={22} color={Colors.grey.tint} />
      <Text style={styles.CTAText}>{meta.likes}</Text>
    </View>
    <View style={styles.CTAContainer}>
      <Ionicons name='share-social-outline' size={22} color={Colors.grey.tint} />
    </View>
  </View>
);

export default TweetCTAContainer;
