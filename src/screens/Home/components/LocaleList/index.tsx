import React from 'react';

import { localeItemModel } from '../../../../modules/shared/data/protocols';
import LocaleItem from '../../../../components/LocaleItem';
import { LocaleListProps } from './localGeneric';
import {
  List,
  ListContainer,
  EmptyContainer,
  EmptyText,
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
      <EmptyText>Seus lugares favoritos irão aparecer aqui!</EmptyText>
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
