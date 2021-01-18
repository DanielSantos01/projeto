/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Modalize } from 'react-native-modalize';

import { MainProps } from './localGeneric';

const Modal: React.FC<MainProps> = ({
  props, isCompact, closeCompact, Component, modalizeRef,
}) => (
  <>
    <Modalize
      snapPoint={50}
      ref={modalizeRef}
      alwaysOpen={!isCompact ? 30 : 0}
      adjustToContentHeight
      onClosed={isCompact ? closeCompact : null}
      handlePosition={isCompact ? 'inside' : 'outside'}
      overlayStyle={{ backgroundColor: 'transparent' }}
      modalStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
    >
      <Component {...props} />
    </Modalize>
  </>
);

export default Modal;
