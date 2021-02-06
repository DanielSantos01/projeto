import React, { useState, useEffect } from 'react';

import {
  handleColorPalletByHour,
  nameErrorNofitication,
  genericSuccessNonification,
} from '../../utils';
import {
  HomeProps,
  OpenCompactProps,
  ColorPalletModel,
  CompactModalInfoModel,
} from './localGeneric';
import { PlaceModel } from '../../modules/shared/data/protocols';
import { openSearcher, StorageHandler } from '../../services';
import Main from './Home';

const Home: React.FC<HomeProps> = () => {
  const [updatedAt, setUpdated] = useState<number>();
  const [colorPallet, setColorPallet] = useState<ColorPalletModel>();
  const [savedPlaces, setSavedPlaces] = useState<PlaceModel[]>([]);
  const [compactModalInfo, setCompactModalInfo] = useState<CompactModalInfoModel>(
    {} as CompactModalInfoModel,
  );

  const getSavedPlaces = async () => {
    const localPlaces: PlaceModel[] = await StorageHandler.getAllPlaces();
    setSavedPlaces(localPlaces);
  };

  const updateList = (updateTime: number) => {
    setUpdated(updateTime);
  };

  const onOpenPlacesSearcher = () => {
    openSearcher({ setUpdated: updateList });
  };

  const openCompact = (props: OpenCompactProps) => {
    const { data, name } = props;
    const organizedInfo: CompactModalInfoModel = {
      isRenameType: !!name,
      previousName: name,
      isWeatherType: !!data,
      requiredPlaceInfo: data,
      isOpened: true,
    };
    setCompactModalInfo(organizedInfo);
  };

  const closeCompact = () => {
    const currentCompactInfo: CompactModalInfoModel = { ...compactModalInfo };
    currentCompactInfo.isOpened = false;
    setCompactModalInfo(currentCompactInfo);
  };

  const onRename = async (newPlaceName: string) => {
    const alreadyExists: boolean = await StorageHandler.checkIfExists(newPlaceName);
    if (alreadyExists) {
      nameErrorNofitication();
      return;
    }
    await StorageHandler.renamePlace(compactModalInfo.previousName, newPlaceName);
    setUpdated(new Date().getMilliseconds());
    closeCompact();
    genericSuccessNonification(
      'Sucesso!',
      `Nome alterado de "${compactModalInfo.previousName}" para "${newPlaceName}"`,
    );
  };

  const onExclude = async (placeName: string) => {
    await StorageHandler.removePlace(placeName);
    const updatedTime: number = new Date().getMilliseconds();
    setUpdated(updatedTime);
    genericSuccessNonification(
      'Sucesso!',
      `O item "${placeName}" foi removido da lista de favoritos`,
    );
  };

  const handlePallet = () => {
    const currentHour: number = new Date().getHours();
    const pallet: ColorPalletModel = handleColorPalletByHour(currentHour);
    setColorPallet(pallet);
  };

  useEffect(() => {
    handlePallet();
    getSavedPlaces();
  }, [updatedAt]);

  return (
    <Main
      onOpenPlacesSearcher={onOpenPlacesSearcher}
      closeCompact={closeCompact}
      onRename={onRename}
      onExclude={onExclude}
      openCompact={openCompact}
      savedPlaces={savedPlaces}
      colorPallet={colorPallet}
      compactModalInfo={compactModalInfo}
    />
  );
};

export default Home;
