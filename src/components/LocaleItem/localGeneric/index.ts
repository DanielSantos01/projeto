/* eslint-disable no-unused-vars */
export interface LocaleItemProps {
  item: any;
  viewLocaleWeather: (item: any) => void;
  editLocaleName: (item: any) => void;
  onTryToExclude: (item: any) => () => void;
}
