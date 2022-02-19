import styled from 'styled-components';

import HeaderImage from 'images/header.png';

import {metrics} from 'styles';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground.attrs({
  source: HeaderImage,
})`
  width: ${metrics.windowWidth};
  height: 170px;
`;

export const Content = styled.View`
  position: absolute;
  inset: 0px;
  padding: 20px;
  flex: 1;
  width: ${metrics.windowWidth};
  height: ${metrics.windowHeight};
`;
