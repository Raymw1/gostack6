import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  statuses: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#DDD',
    borderRadius: 4,
    padding: 4,
  },
  status: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
});

export default styles;
