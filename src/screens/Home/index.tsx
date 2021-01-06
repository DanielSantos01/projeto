import React, { useState, useEffect } from 'react';

import {
  viewLocaleWeather,
  editLocaleName,
  openLocaleSearcher,
} from '../../services';
import {
  getLocalData,
  saveLocalData,
  handleNewLocale,
  getUserAnswer,
} from '../../utils';
import { HomeProps } from './localGeneric';
import Main from './Home';

const Home: React.FC<HomeProps> = ({ route }) => {
  const { params } = route;
  const [items, setItems] = useState([]);

  const alignData = (data: any) => {
    setItems(data);
    saveLocalData(data);
  };

  const verifyLocalData = async () => {
    const weatherData = await getLocalData();
    setItems(weatherData);
  };

  const checkSetItems = () => {
    const response = handleNewLocale(params, items);
    alignData(response);
  };

  const removeFromList = (item) => {
    const data = items;
    data.splice(data.indexOf(item), 1);
    alignData(data);
  };

  const onExcludeConfirm = (item) => () => {
    removeFromList(item);
  };

  const onTryToExclude = (item) => () => {
    getUserAnswer(onExcludeConfirm(item));
  };

  const onTryToEdit = (item) => {
    editLocaleName(items.indexOf(item), item.title, items);
  };

  const onTryToViewWeather = (item) => {
    viewLocaleWeather(item.latitude, item.longitude);
  };

  const onOpenLocaleSearcher = () => {
    openLocaleSearcher(items);
  };

  useEffect(() => {
    checkSetItems();
  }, [params]);

  useEffect(() => {
    verifyLocalData();
  }, []);

  return (
    <Main
      editLocaleName={onTryToEdit}
      viewLocaleWeather={onTryToViewWeather}
      onTryToExclude={onTryToExclude}
      onOpenLocaleSearcher={onOpenLocaleSearcher}
      items={items}
      extraData={new Date().getMilliseconds()}
    />
  );
};

export default Home;
