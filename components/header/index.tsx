import { GestureResponderEvent, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import Colors from '../../constants/Colors';
import styles from './styles';

export type HeaderProps = {
  // Required props
  onClosePress: (e: GestureResponderEvent) => void,
  onTweetPress: (e: GestureResponderEvent) => void,
  // Optional props
  title?: string,
  headerComponentStyles?: Object,
}

const Header = ({ onClosePress, onTweetPress }:HeaderProps) => {

  return (
    <SafeAreaView style={styles.headerRightContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClosePress}
      >
        <Ionicons name='close' size={24} color={Colors.light.tint} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onTweetPress}
        style={styles.headerRightButton}
      >
        <Text style={styles.headerRightButtonText}>Tweet</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
