import styled from 'styled-components/native';

type TextProps = {
    cancelType?: boolean;
}

export const Container = styled.View`
  height: 200px;
  padding-top: 20px;
`;

export const Input = styled.TextInput`
  border-radius: 20px;
  background-color: rgba(100, 100, 100, .3);
  padding-left: 15px;
  width: 95%;
  align-self: center;
  font-size: 14px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;
`;

export const CancelButton = styled.TouchableOpacity`
  border-radius: 10px;
  height: 40px;
  width: 100px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  background-color: gray;
`;

export const ConfirmButton = styled(CancelButton)`
  background-color: blue;
`;

export const ButtonText = styled.Text<TextProps>`
  color: ${({ cancelType }) => (cancelType ? 'black' : 'white')};
  font-size: 14px;
  text-align: center;
`;
