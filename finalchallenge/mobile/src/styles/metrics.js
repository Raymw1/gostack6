import {Platform} from 'react-native';
import {Dimensions} from 'react-native';

export default {
  padding: '16px',
  ...Platform.select({
    ios: {headerHeight: '64px', headerPadding: '20px'},
    android: {headerHeight: '44px', headerPadding: 0},
  }),
  tabBarHeight: '50px',
  windowWidth: `${Dimensions.get('window').width}px`,
  windowHeight: `${Dimensions.get('window').height}px`,
};
