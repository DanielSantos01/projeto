import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.mediumGray};
  justify-content: center;
  align-items: center;
  height: 400px;
`;

export const TextContent = styled.Text`
  color: rgba(0, 0, 0, .3);
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image`
  align-self: center;
  width: 100px;
  height: 100px;
`;
