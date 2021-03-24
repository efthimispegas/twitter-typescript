import React from 'react';
import { View } from '../../../Themed';
import { UserType } from '../../../../types';
import ProfilePicture from '../../../profilePicture';
import styles from './styles';

export type TweetLeftContainerProps = {
  // Required props
  user: UserType,
  // Optional props
};

const TweetLeftContainer = ({ user }: TweetLeftContainerProps) => (
  <View style={styles.tweetLeftContainer}>
    <ProfilePicture image={ user.image } />
  </View>
);

export default TweetLeftContainer;
