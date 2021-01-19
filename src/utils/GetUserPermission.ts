import { PermissionsAndroid } from 'react-native';

import { genericErrorNotification } from './handleNotifications';

export const getUserPermission = async (): Promise<boolean> => {
  try {
    const response: string =
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    return response === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    genericErrorNotification(
      'Erro',
      'Não foi possível obter a resposta sobre o uso da localização.',
    );
  }
  return false;
};
