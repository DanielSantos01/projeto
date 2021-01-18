import React, { useState, useEffect } from 'react';

import { localeItemModel } from '../../modules/shared/data/protocols';
import { openSearcher, StorageHandler } from '../../services';
import { HomeProps, OpenCompactProps } from './localGeneric';
import Main from './Home';

const Home: React.FC<HomeProps> = () => {
  const [updatedAt, setUpdated] = useState<number>();
  const [isOpened, setOpened] = useState<boolean>();
  const [isData, setIsData] = useState<boolean>();
  const [localeData, setLocaleData] = useState<localeItemModel>();
  const [previousName, setPreviousName] = useState<string>();
  const [items, setItems] = useState<localeItemModel[]>([]);

  const verifyLocalData = async () => {
    const weatherData: localeItemModel[] = await StorageHandler.getItems();
    setItems(weatherData);
  };

  const updateList = (updateTime: number) => {
    setUpdated(updateTime);
  };

  const onOpenLocaleSearcher = () => {
    openSearcher({ setUpdated: updateList });
  };

  const openCompact = (props: OpenCompactProps) => {
    const { data, name } = props;
    if (name) {
      setPreviousName(name);
      setIsData(false);
    } else {
      setLocaleData(data);
      setIsData(true);
    }
    setOpened(true);
  };

  const closeCompact = () => setOpened(false);

  const onRename = async (newName: string) => {
    const alreadyExists: boolean = await StorageHandler.checkIfExists(newName);
    if (alreadyExists) {
      alert('escolha outro nome');
      return;
    }
    await StorageHandler.renameItem(previousName, newName);
    setUpdated(new Date().getMilliseconds());
    closeCompact();
  };

  const onExclude = async (itemName: string) => {
    await StorageHandler.removeItem(itemName);
    setUpdated(new Date().getMilliseconds());
  };

  useEffect(() => {
    verifyLocalData();
  }, [updatedAt]);

  return (
    <Main
      onOpenLocaleSearcher={onOpenLocaleSearcher}
      closeCompact={closeCompact}
      isData={isData}
      isOpened={isOpened}
      localeData={localeData}
      onRename={onRename}
      onExclude={onExclude}
      openCompact={openCompact}
      items={items}
    />
  );
};

export default Home;
