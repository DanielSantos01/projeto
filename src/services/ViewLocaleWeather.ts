import HandleNavigation from './HandleNavigation';

export const viewLocaleWeather = (latitude: number, longitude: number) => {
  HandleNavigation.navigate('Data', {
    latitude,
    longitude,
  });
};
