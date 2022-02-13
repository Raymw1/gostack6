import styled from 'styled-components';

import HeaderImage from 'images/header.png';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground.attrs({
  source: HeaderImage,
})`
  width: 100%;
  height: 170px;
`;

export const Content = styled.View`
  position: absolute;
  inset: 0px;
  padding: 20px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
