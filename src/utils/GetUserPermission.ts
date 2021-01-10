import { PermissionsAndroid } from 'react-native';

export const getUserPermission = async () => {
  try {
    const response: string =
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    const isGranted: boolean = response === PermissionsAndroid.RESULTS.GRANTED;
    return isGranted;
  } catch (err) {
    // TODO (tratamento do erro)
  }
  return false;
};
