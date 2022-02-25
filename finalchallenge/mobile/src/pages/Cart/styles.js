import styled from 'styled-components/native';

import {fonts} from 'styles';

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${fonts.big};
  color: #fff;
  font-weight: bold;
`;

export const ProductsList = styled.FlatList`
  margin-top: 20px;
  width: 100%;
`;
