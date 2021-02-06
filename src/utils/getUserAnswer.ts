import { Alert } from 'react-native';

export const getUserAnswer = (placeName: string, confirmAction: () => void): void => {
  Alert.alert('Exclusão de item',
    `O item "${placeName}" está prestes a ser excluído`,
    [
      { text: 'Excluir', onPress: confirmAction },
      { text: 'Cancelar' },
    ], { cancelable: true });
};
