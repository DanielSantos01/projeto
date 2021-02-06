import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

type TextProps = {
  cancelType?: boolean;
}

export const Container = styled(LinearGradient)`
  height: 200px;
  padding-top: 20px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-color: ${({ theme }) => theme.colors.mediumGray};
`;

export const Input = styled.TextInput`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.lowGray};
  padding-left: 15px;
  width: 95%;
  align-self: center;
  font-size: 14px;
  elevation: 2;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${({ theme }) => theme.colors.mediumGray};
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;
`;

export const CancelButton = styled.TouchableOpacity`
  border-radius: 125px;
  height: 50px;
  width: 130px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.mediumGray};
  elevation: 2;
`;

export const ConfirmButton = styled(CancelButton)`
 background-color: ${({ theme }) => theme.colors.lowBlue};
`;

export const ButtonText = styled.Text<TextProps>`
  color: ${({ cancelType }) => (cancelType ? 'black' : 'white')};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;
