export const CITY_NAME_PLACEHOLDER = 'CITY_NAME_PLACEHOLDER';
export const LATITUDE_PLACEHOLDER = 'LATITUDE_PLACEHOLDER';
export const LONGITUDE_PLACEHOLDER = 'LONGITUDEPLACEHOLDER';

export const urlByName: string = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME_PLACEHOLDER}&appid=d812ba41f36e1b6fdb2e8a4b8224ec45`;
export const urlByPosition: string = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE_PLACEHOLDER}&lon=${LONGITUDE_PLACEHOLDER}&appid=d812ba41f36e1b6fdb2e8a4b8224ec45&units=metric`