import { Alert } from 'react-native';

export const getUserAnswer = (itemName: string, confirmAction: () => void) => {
  Alert.alert('Tem certeza?',
    `O item "${itemName}" está prester a ser excluído`,
    [
      { text: 'Excluir', onPress: confirmAction },
      { text: 'Cancelar' },
    ], { cancelable: true });
};
