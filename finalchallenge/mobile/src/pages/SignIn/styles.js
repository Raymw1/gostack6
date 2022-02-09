import styled, {css} from 'styled-components/native';

import backgroundImage from 'images/background.jpg';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground.attrs({
  source: backgroundImage,
})`
  flex: 1;
`;

export const LinearGradient = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
