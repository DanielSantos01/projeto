import AsyncStorage from '@react-native-community/async-storage';

export const saveLocalData = async (data) => {
  try {
    if (data) {
      await AsyncStorage.setItem('@data', JSON.stringify(data));
    }
  } catch (err) {
    // TODO (Card apresentando o erro tratado)
    alert(err);
  }
};
