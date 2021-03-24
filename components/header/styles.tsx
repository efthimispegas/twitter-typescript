import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

const styles = StyleSheet.create({
  headerRightContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.light.background,
    flexDirection: 'row',
  },
  headerRightButton: {
    backgroundColor: Colors.CTA.background,
    borderRadius: 40,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  headerRightButtonText: {
    ...Typography.p,
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.CTA.text,
  },
});

export default styles;
