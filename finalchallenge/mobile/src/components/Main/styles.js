import styled from 'styled-components';
import {Dimensions} from 'react-native';

import HeaderImage from 'images/header.png';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground.attrs({
  source: HeaderImage,
})`
  width: ${Dimensions.get('window').width};
  height: 170px;
`;

export const Content = styled.View`
  position: absolute;
  inset: 0px;
  padding: 20px;
  flex: 1;
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;
