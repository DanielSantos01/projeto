import { Alert } from 'react-native';

export const getUserAnswer = (itemName: string, confirmAction: () => void) => {
  Alert.alert('Exclusão de item',
    `O item "${itemName}" está prestes a ser excluído`,
    [
      { text: 'Excluir', onPress: confirmAction },
      { text: 'Cancelar' },
    ], { cancelable: true });
};
