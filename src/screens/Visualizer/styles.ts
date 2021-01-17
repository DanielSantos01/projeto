import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: 25px;
`;

export const ContentContainer = styled.ScrollView`
  height: 100%;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 20px;
  width: 150px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

export const Input = styled.TextInput`
  width: 90%;
  border-radius: 20px;
  padding-left: 12px;
  font-size: 14px;
  align-self: center;
  background-color: rgba(0, 0, 0, .2);
`;
