import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  newTweetButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 60,
    width: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.CTA.background,
  },
});

export default styles;
