import React from 'react';

import { localeItemModel } from '../../../../modules/shared/data/protocols';
import LocaleItem from '../../../../components/LocaleItem';
import { LocaleListProps } from './localGeneric';
import {
  List,
  ListContainer,
  EmptyContainer,
  EmptyText,
  Icon,
} from './styles';

const LocaleList: React.FC<LocaleListProps> = ({
  items,
  openCompact,
  onExclude,
}) => {
  const OnRender = ({ item }) => (
    <LocaleItem
      item={item}
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
      <List<any>
        ListEmptyComponent={Empty}
        data={items}
        renderItem={OnRender}
        keyExtractor={(item: localeItemModel) => item.name}
      />
    </ListContainer>
  );
};

export default LocaleList;
