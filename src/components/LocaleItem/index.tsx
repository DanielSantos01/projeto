/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';

import getShadow from '../utils/getShadow';
import { LocaleItemProps } from './localGeneric';
import {
  SavedLocale,
  LocaleOption,
  ItemContainer,
  LocaleText,
} from './styles';

const LocaleItem: React.FC<LocaleItemProps> = ({
  item,
  viewLocaleWeather,
  editLocaleName,
  onTryToExclude,
}) => (
  <ItemContainer style={getShadow('#000')}>

    <View style={{ width: '50%' }}>
      <SavedLocale<any>
        icon="cloud-outline"
        mode="contained"
        onPress={viewLocaleWeather}
        theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
      >
        <LocaleText>{item.title}</LocaleText>
      </SavedLocale>

    </View>

    <LocaleOption
      icon="border-color"
      mode="contained"
      onPress={editLocaleName}
      theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
    />

    <LocaleOption
      icon="close-circle"
      mode="contained"
      onPress={onTryToExclude(item)}
      theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
    />
  </ItemContainer>
);

export default LocaleItem;
