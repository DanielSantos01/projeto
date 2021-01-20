import styled from 'styled-components/native';

type ButtonProps = {
  onPress: () => void;
};

export const CardContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.lowGray};
  width: 95%;
  height: 55px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 15px;
  elevation: 5;
`;

export const PlaceNameContainer = styled.View`
  width: 60%;
  height: 35px;
  margin-left: 5px;
  margin-right: 0px;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
`;

export const PlaceName = styled.Text`
  text-align: left;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lowBlue};
  opacity: 0.5;
  elevation: 10;
  margin-left: 10px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Option = styled.TouchableOpacity<ButtonProps>`
  margin-left: 5%;
  height: 30px;
  margin-top: auto;
  margin-bottom: auto;
  width: 10%;
  align-items: center;
  justify-content: center;
`;
