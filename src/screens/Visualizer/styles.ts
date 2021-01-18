import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { StyleSheet } from 'react-native';

type InfoProps = {
  isBold?: boolean;
}

type IconProps = {
  color?: string;
  size?: number;
}

export const Container = styled(LinearGradient)`
  flex: 1;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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

export const LocaleName = styled.Text`
  color: ${({ theme }) => theme.colors.lowBlue};
  font-size: 14px;
  opacity: 0.5;
  font-style: italic;
  font-weight: bold;
  text-align: center;
`;

export const WeatherIcon = styled.Image`
  width: 120px;
  height: 120px;
`;

export const WeatherInfoContainer = styled.View`
  padding: 12px;
  flex-direction: row;
`;

export const Info = styled.Text<InfoProps>`
  color: ${({ theme }) => theme.colors.lowBlue};
  font-size: 20px;
  opacity: 0.5;
  font-weight: ${({ isBold }) => (isBold ? 'bold' : '500')};
  margin-left: 5px;
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
  font-weight: bold;
`;

export const IconContainer = styled.View`
  width: 30px;
  height: 30px;
  border-color: ${({ theme }) => theme.colors.mediumGray};
  border-width: ${StyleSheet.hairlineWidth}px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  background-color: transparent;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${({ size }) => size || 15}px;
  font-weight: bold;
  color: ${({ theme, color }) => color || theme.colors.lowBlue};
  opacity: 0.5;
  margin-top: auto;
  margin-bottom: auto;
`;

export const LocaleContainer = styled.View`
  flex-direction: row;
  width: 80%;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const Temperature = styled.Text`
  color: ${({ theme }) => theme.colors.lowGray};
  margin-top: -20px;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  align-self: center;
`;
