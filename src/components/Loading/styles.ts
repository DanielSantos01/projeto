import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.mediumGray};
  justify-content: center;
  align-items: center;
  height: 400px;
`;

export const TextContent = styled.Text`
  color: ${({ theme }) => theme.colors.blueSky};
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;
