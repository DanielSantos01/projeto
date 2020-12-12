/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View } from 'react-native';

import HandleNavigation from '../../services/HandleNavigation';
import getShadow from '../../components/utils/getShadow';
import { MainProps } from './localGeneric';
import {
  TitleContainer,
  FooterText,
  FooterContainer,
  EmptyContainer,
  EmptyText,
  Subtitle,
  Title,
  ListTitle,
  List,
  SavedLocale,
  LocaleOption,
  ItemContainer,
  LocaleText,
  SearchButton,
} from './styles';

const Home: React.FC<MainProps> = ({
  items,
  isRefreshing,
  areYouSure,
}) => {
  const renderItem = ({ item }) => (
    <ItemContainer style={getShadow('#000')}>

      <View style={{ width: '50%' }}>
        <SavedLocale
          icon="cloud-outline"
          mode="contained"
          onPress={() => {
            HandleNavigation.navigate('Data', {
              latitude: item.latitude,
              longitude: item.longitude,
            });
          }}
          theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
        >
          <LocaleText>{item.title}</LocaleText>
        </SavedLocale>

      </View>

      <LocaleOption
        icon="border-color"
        mode="contained"
        onPress={() => {
          HandleNavigation.navigate('Edit', {
            loc: items.indexOf(item),
            name: item.title,
            elements: items,
          });
        }}
        theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
      />

      <LocaleOption
        icon="close-circle"
        mode="contained"
        onPress={() => { areYouSure(item); }}
        theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
      />
    </ItemContainer>
  );

  const empty = () => (
    <EmptyContainer>
      <EmptyText>your favorite places will appear here</EmptyText>
    </EmptyContainer>
  );

  return (
    <View>
      <TitleContainer>
        <Title>Weather</Title>
        <Subtitle>each season your way</Subtitle>
      </TitleContainer>

      <View>
        <ListTitle>Your list of places</ListTitle>
      </View>

      <View style={{ height: 200 }}>
        <List
          refreshing={isRefreshing}
          onRefresh={() => {}}
          ListEmptyComponent={empty}
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </View>

      <SearchButton
        icon="magnify"
        mode="contained"
        onPress={() => { HandleNavigation.navigate('Search', { elements: items }); }}
        theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
      >
        <Text style={{ color: 'white' }}>Search</Text>
      </SearchButton>

      <FooterContainer>
        <FooterText>
          by TrackingTrade
          {'\n'}
          2020
        </FooterText>
      </FooterContainer>
    </View>
  );
};

export default Home;
