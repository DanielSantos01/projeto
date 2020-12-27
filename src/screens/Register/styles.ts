import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 150px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;
