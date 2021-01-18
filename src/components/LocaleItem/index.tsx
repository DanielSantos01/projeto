/* eslint-disable react/prop-types */
import React from 'react';

import { getUserAnswer } from '../../utils';
import Main from './localeItem';
import { LocaleItemProps } from './localGeneric';

const LocaleItem: React.FC<LocaleItemProps> = ({
  item,
  openCompact,
  onExclude,
}) => {
  const openDataCompact = () => {
    openCompact({ data: item });
  };

  const openRenameCompact = () => {
    openCompact({ name: item.name });
  };

  const removeItem = async () => {
    getUserAnswer(item.name, () => onExclude(item.name));
  };

  return (
    <Main
      name={item.name}
      openDataCompact={openDataCompact}
      openRenameCompact={openRenameCompact}
      removeItem={removeItem}
    />
  );
};

export default LocaleItem;
