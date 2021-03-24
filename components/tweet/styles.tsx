import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  tweetContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 5,
    borderBottomWidth: 0.2,
    borderColor: Colors.grey.tint,
  },
  tweetTopContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 2,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  tweetBottomContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingLeft: 10,
  }
});

export default styles;
