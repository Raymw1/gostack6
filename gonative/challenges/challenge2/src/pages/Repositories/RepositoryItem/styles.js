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
  repository: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  info: {
    marginLeft: 16,
  },
  full_name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#111',
  },
  name: {
    color: '#666',
  },
});

export default styles;
