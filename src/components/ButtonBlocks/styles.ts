import styled from 'styled-components/native';

export const RowContainer = styled.View`
  flex-direction: row;
`;

export const BoxTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 20px;
  margin-top: 10%;
  margin-bottom: 10%;
`;

export const ButtonText = styled.Text`
  color: white;
`;

export const Button = styled.TouchableOpacity`
margin-bottom: 10px;
  margin-top: 10%;
  border-radius: 20px;
  width: 150px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HalfContainer = styled.View`
  width: 47%;
  background-color: ${({ theme }) => theme.colors.blueSky}
`;
