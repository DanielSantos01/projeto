import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

type ButtonProps = {
  display?: boolean;
}

type IconProps = {
  color?: string;
  size?: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const GradientContainer = styled(LinearGradient)`
  height: 100%;
  padding-bottom: 5px;
`;

export const TitleContainer = styled.View`
    width: 100%;
    height: 200px;
    padding-top: 40px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    border-bottom-right-radius: 200px;
    border-bottom-left-radius: 200px;
    elevation: 5;
    background-color: ${({ theme }) => theme.colors.sunrise};
`;

export const Title = styled.Text`
    margin-top: 5px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lowGray};
`;

export const Subtitle = styled.Text`
    font-size: 12px;
    text-align: center;
    font-style: italic;
    color: ${({ theme }) => theme.colors.lowBlue};
    margin-top: -5px;
`;

export const ListTitleContainer = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ListTitle = styled.Text`
    align-self: center;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.lowGray};
    font-size: 18px;
    margin-right: 5px;
`;

export const SearchButton = styled.TouchableOpacity<ButtonProps>`
    border-radius: 50px;
    width: 150px;
    height: 40px;
    align-self: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    elevation: 6;
    background-color: ${({ theme }) => theme.colors.lowBlue};
    display: ${({ display }) => (display ? 'flex' : 'none')};
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
  margin-left: 5px;
  font-weight: 800;
  text-align: center;
`;

export const Icon = styled(Feather)<IconProps>`
  font-weight: bold;
  color: ${({ theme, color }) => color || theme.colors.lowGray};
  font-size: ${({ size }) => size || 25}px;
`;
