import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

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
    border-radius: 50px;
    width: 150px;
    height: 40px;
    align-self: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    elevation: 6;
    background-color: ${({ theme }) => theme.colors.lowBlue};
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
  margin-left: 5px;
  font-weight: 800;
  text-align: center;
`;

export const Icon = styled(Feather)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.lowGray};
  font-size: 25px;
`;
