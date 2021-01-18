import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: 25px;
  padding-bottom: 25px;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.ScrollView`
  height: 100%;
  width: 100%;
`;

export const WeatherIconContainer = styled.View`
  align-items: center;
`;

export const LocalName = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 30px;
`;

export const WeatherIcon = styled.Image`
  width: 120px;
  height: 120px;
`;

export const WeatherInfoContainer = styled.View`
  padding: 12px;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
`;

export const DirectionerContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

export const DirectionerText = styled.Text`
  color: white;
  font-size: 17px;
`;

export const SaveButton = styled.TouchableOpacity`
  border-color: black;
  border-width: ${StyleSheet.hairlineWidth}px;
  margin-top: 10px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  width: 40%;
  align-self: center;
  height: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: black;
  text-align: center;
`;
