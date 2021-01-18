/* eslint-disable react/prop-types */
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import getShadow from '../utils/getShadow';
import { MainProps } from './localGeneric';
import {
  SavedLocale,
  LocaleOption,
  ItemContainer,
  LocaleText,
} from './styles';

const LocaleItem: React.FC<MainProps> = ({
  name,
  openDataCompact,
  openRenameCompact,
  removeItem,
}) => (
  <ItemContainer style={getShadow('#000')}>

    <SavedLocale onPress={openDataCompact}>
      <Feather name="cloud" color="white" size={20} />
      <LocaleText>{name}</LocaleText>
    </SavedLocale>

    <LocaleOption onPress={openRenameCompact}>
      <Feather name="edit" color="#0DB2D6" size={20} />
    </LocaleOption>

    <LocaleOption onPress={removeItem}>
      <Feather name="trash-2" color="red" size={20} />
    </LocaleOption>
  </ItemContainer>
);

export default LocaleItem;
