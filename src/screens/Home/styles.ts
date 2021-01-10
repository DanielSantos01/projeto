import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const TitleContainer = styled.View`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
`;

export const Title = styled.Text`
    margin-top: 5px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.Text`
    font-size: 12px;
    text-align: center;
    font-style: italic;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: -5px;
`;

export const ListTitle = styled.Text`
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    margin-top: 10%;
`;

export const SearchButton = styled.TouchableOpacity`
    margin-bottom: 10px;
    margin-top: 0px;
    border-radius: 20px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
  text-align: center;
`;
