import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import styles from './styles';
import Colors from '../../constants/Colors';

export type NewTweetProps = {
  // Required props
  onPress: (e: any) => void,
  // Optional props
};

const NewTweetButton = ({ onPress }: NewTweetProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.newTweetButtonContainer}
  >
    <Entypo name='feather' size={26} color={Colors.CTA.icon} />
  </TouchableOpacity>
);

export default NewTweetButton;
