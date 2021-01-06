import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

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
