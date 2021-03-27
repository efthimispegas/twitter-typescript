import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

const styles = StyleSheet.create({
  newTweetWrapper: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 15,
    paddingBottom: 10, //might delete later
  },
  newTweetContainer: {
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
  uploadImageButton: {
    backgroundColor: Colors.CTA.background,
    marginVertical: 5,
    padding: 10,
    marginTop: 50,
    borderRadius: 20,
    alignSelf: 'center',
  },
  uploadImageText: {
    color: Colors.CTA.text,
    ...Typography.h1,
  },
  uploadedImageContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 25,
  },
  uploadedImage: {
    width: 300,
    height: 300,
    borderRadius: 20,
  }
});

export default styles;
