import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { PlaceModel } from '../../../../modules/shared/data/protocols';
import PlaceCard from '../../../../components/PlaceCard';
import { PlacesListProps } from './localGeneric';
import {
  ListContainer,
  EmptyContainer,
  EmptyText,
  Icon,
} from './styles';

const PlacesList: React.FC<PlacesListProps> = ({
  places,
  openCompact,
  onExclude,
}) => {
  const OnRender: ListRenderItem<PlaceModel> = ({ item }) => (
    <PlaceCard
      place={item}
      openCompact={openCompact}
      onExclude={onExclude}
    />
  );

  const Empty: React.FC = () => (
    <EmptyContainer>
      <EmptyText>Você ainda não favoritou nenhum local</EmptyText>
      <Icon name="cloud-offline-outline" />
    </EmptyContainer>
  );

  return (
    <ListContainer>
      <FlatList<PlaceModel>
        data={places}
        renderItem={OnRender}
        ListEmptyComponent={Empty}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20, marginTop: 10 }}
      />
    </ListContainer>
  );
};

export default PlacesList;
