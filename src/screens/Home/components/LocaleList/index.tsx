import React from 'react';

import LocaleItem from '../../../../components/LocaleItem';
import { LocaleListProps } from './localGeneric';
import {
  List,
  ListContainer,
  EmptyContainer,
  EmptyText,
} from './styles';

const LocaleList: React.FC<LocaleListProps> = ({
  editLocaleName,
  extraData,
  items,
  onTryToExclude,
  viewLocaleWeather,
}) => {
  const OnRender: React.FC<any> = ({ item }) => (
    <LocaleItem
      item={item}
      onTryToExclude={onTryToExclude}
      editLocaleName={editLocaleName}
      viewLocaleWeather={viewLocaleWeather}
    />
  );

  const Empty: React.FC = () => (
    <EmptyContainer>
      <EmptyText>your favorite places will appear here</EmptyText>
    </EmptyContainer>
  );

  return (
    <ListContainer>
      <List<any>
        ListEmptyComponent={Empty}
        data={items}
        renderItem={OnRender}
        keyExtractor={(item) => item.key}
        extraData={extraData}
      />
    </ListContainer>
  );
};

export default LocaleList;
