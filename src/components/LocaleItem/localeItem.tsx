/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';

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

    <View style={{ width: '50%' }}>
      <SavedLocale<any>
        icon="cloud-outline"
        mode="contained"
        onPress={openDataCompact}
        theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
      >
        <LocaleText>{name}</LocaleText>
      </SavedLocale>

    </View>

    <LocaleOption
      icon="border-color"
      mode="contained"
      onPress={openRenameCompact}
      theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
    />

    <LocaleOption
      icon="close-circle"
      mode="contained"
      onPress={removeItem}
      theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
    />
  </ItemContainer>
);

export default LocaleItem;
