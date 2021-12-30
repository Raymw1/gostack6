import {StyleSheet} from 'react-native';
import {colors, general} from 'styles';

const styles = StyleSheet.create({
  ...general.buttonStyles,

  container: {
    flex: 1,
    backgroundColor: colors.backgroundDarker,
    paddingHorizontal: 20,
    paddingTop: 18,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    textTransform: 'uppercase',
  },

  memberList: {
    marginTop: 20,
  },

  memberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  memberName: {
    color: colors.lighter,
    fontSize: 16,
  },
});

export default styles;
