import {Platform} from 'react-native';

export default {
  padding: '16px',
  ...Platform.select({
    ios: {headerHeight: '64px', headerPadding: '20px'},
    android: {headerHeight: '44px', headerPadding: 0},
  }),
  tabBarHeight: '50px',
};
