import AsyncStorage from '@react-native-community/async-storage';

export const getLocalData = async () => {
  try {
    const previous = await AsyncStorage.getItem('@data');
    if (previous) {
      return JSON.parse(previous);
    }
  } catch (err) {
    // TODO (Card apresentando o erro tratado)
    // alert(err);
  }
  return [];
};
