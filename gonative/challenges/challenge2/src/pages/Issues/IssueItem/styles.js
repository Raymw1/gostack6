import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
  },
  issue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  info: {
    marginHorizontal: 16,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#111',
  },
  name: {
    color: '#666',
  },
});

export default styles;
