import { Alert } from 'react-native';

export const getUserAnswer = (confirmAction) => {
  Alert.alert('Tem certeza?',
    'Esta ação removerá o item selecionado',
    [
      { text: 'Sim, tenho certeza', onPress: confirmAction },
      { text: 'Não desejo excluir' },
    ], { cancelable: true });
};
