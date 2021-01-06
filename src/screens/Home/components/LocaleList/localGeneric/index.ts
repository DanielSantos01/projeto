/* eslint-disable no-unused-vars */
export interface LocaleListProps {
  items: any[];
  extraData: number;
  viewLocaleWeather: (item: any) => void;
  editLocaleName: (item: any) => void;
  onTryToExclude: (item: any) => () => void;
}
