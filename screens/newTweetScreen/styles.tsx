import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

const styles = StyleSheet.create({
  newTweetWrapper: {
    flex:1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 15,
    paddingBottom: 10, //might delete later
  },
  newTweetContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  inputsContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
  },
  textInputContainer: {
    marginVertical: 5,
    fontSize: 18,
    padding: 5,
    height: 100,
    maxHeight: 300,
  },
  imageInputContainer: {
    marginVertical: 5,
    padding: 5,
  }
});

export default styles;
