import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  background: #fff;
  padding: 20px;
  width: 90%;
  border-radius: 4px;
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #666;
  text-align: center;
`;

export const Input = styled.TextInput`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 44px;
  padding: 0 20px;
  margin-top: 20px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => (props.cancel ? '#ccc' : '#85c47c')};
  border-radius: 4px;
  height: 44px;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-right: ${props => (!props.last ? '8px' : 0)};
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
