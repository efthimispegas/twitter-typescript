import { StyleSheet } from 'react-native';
import Typography from '../../../../constants/Typography';

const styles = StyleSheet.create({
  tweetHeaderWrapper: {
    flexDirection: 'row',
  },
  tweetHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2,
  },
  tweetNameText: {
    ...Typography.h1,
    marginHorizontal: 2,
  },
  tweetUsernameText: {
    ...Typography.h2,
    marginHorizontal: 2,
  },
  tweetTimestampText: {
    ...Typography.h2,
    marginHorizontal: 2,
  },
  tweetIconContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  tweetMoreIcon: {
    alignSelf: 'center',
  },
  tweetContentContainer: {
    marginHorizontal: 2,
  },
  tweetContentText: {
    ...Typography.p,
    textAlign: 'justify',
  },
  tweetImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginVertical: 5,
    resizeMode: 'cover',
    overflow: 'hidden',

  }
});

export default styles;
