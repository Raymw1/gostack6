import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  baseMargin: 8,
  basePadding: 20,
  baseRadius: 4,
  screeWidth: width < height ? width : height,
  screeHeight: width < height ? height : width,
};
