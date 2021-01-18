import styled from 'styled-components/native';

export const ItemContainer = styled.View`
  background-color: #0040;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SavedLocale = styled.TouchableOpacity`
  margin-bottom: 10px;
  margin-top: 10px;
  width: 50%;
  height: 35px;
  margin-left: 5px;
  margin-right: 0px;
  background-color: ${({ theme }) => theme.colors.lowBlue};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const LocaleText = styled.Text`
  text-align: left;
  font-size: 14px;
  color: white;
  margin-left: 10px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
`;

export const LocaleOption = styled.TouchableOpacity<any>`
  margin-left: 5%;
  height: 30px;
  margin-top: auto;
  margin-bottom: auto;
  width: 15%;
  align-items: center;
  justify-content: center;
`;
