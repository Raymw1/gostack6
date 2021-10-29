// stylesheet react native
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 16,
    height: 44,
  },
  button: {
    marginLeft: 12,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#000',
  },
});

export default styles;
