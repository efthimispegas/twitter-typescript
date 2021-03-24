import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  tweetContainer: {
    flex: 1,
    flexDirection: 'column',
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
    paddingLeft: 40,
    borderBottomWidth: 0.2,
    borderColor: Colors.grey.tint,
  }
});

export default styles;
