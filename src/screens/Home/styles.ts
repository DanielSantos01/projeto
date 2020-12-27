import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const TitleContainer = styled.View`
    background-color: #fff;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    border-radius: 25px;
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

export const EmptyContainer = styled.View`
    background-color: transparent;
`;

export const EmptyText = styled.Text`
    text-align: left;
    font-size: 15px;
    color: white;
    margin-left: auto;
    margin-right: auto;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 7px;
    border-radius: 5px;
`;

export const FooterContainer = styled.View`
    margin-top: 42%;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const FooterText = styled.Text`
    color: white;
    text-align: center;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const ListTitle = styled.Text`
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
    margin-top: 10%;
`;

export const List = styled.FlatList`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const SavedLocale = styled(Button)`
    margin-bottom: 10px;
    margin-top: 10px;
    width: 100%;
    margin-left: 5px;
    margin-right: 0px;
`;

export const LocaleText = styled.Text`
    text-align: left;
    font-size: 11px;
    color: white;
    margin-left: 20px;
    font-weight: bold;
    margin-top: auto;
    margin-bottom: auto;
`;

export const LocaleOption = styled(Button)<any>`
    margin-left: 5%;
    height: 30px;
    margin-top: auto;
    margin-bottom: auto;
    width: 15%;
`;

export const ItemContainer = styled.View`
    background-color: #0040;
    flex-direction: row;
`;

export const SearchButton = styled(Button)`
    margin-bottom: 10px;
    margin-top: 0px;
    border-radius: 20px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
`;
