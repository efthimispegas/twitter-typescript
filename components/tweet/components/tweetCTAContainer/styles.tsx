import { StyleSheet } from 'react-native';
import Typography from '../../../../constants/Typography';

const styles = StyleSheet.create({
  tweetCTAWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  CTAContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  CTAText: {
    ...Typography.h2,
    paddingHorizontal: 5,
  }
});

export default styles;
