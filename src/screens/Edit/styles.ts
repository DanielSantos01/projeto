import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
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

export const TextContainer = styled.View`
  margin-top: 40px;
  margin-bottom: 10px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.attention};
`;

export const TextInfo = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
  font-weight: bold;
  margin-bottom: auto;
  margin-top: auto;
`;
