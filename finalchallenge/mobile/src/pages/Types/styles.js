import styled from 'styled-components/native';

import {fonts} from 'styles';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${fonts.big};
  color: #fff;
  font-weight: 500;
`;

export const TypesList = styled.FlatList`
  margin-top: 20px;
  width: 100%;
`;
