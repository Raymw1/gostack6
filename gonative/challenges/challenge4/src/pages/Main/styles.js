import styled, {css} from 'styled-components/native';

import styles from 'styles';
const {colors, metrics} = styles;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const CategoryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  background-color: ${colors.secondary};
  max-height: 54px;
  padding: 0 ${metrics.basePadding}px;
`;

export const Category = styled.TouchableOpacity`
  justify-content: center;
  margin-right: 30px;
`;

export const CategoryText = styled.Text`
  color: ${props => (props.active ? colors.white : colors.whiteTransparent)};
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
  font-weight: bold;
  text-transform: uppercase;
`;
