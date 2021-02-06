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
      overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, .05)' }}
      modalStyle={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 10,
      }}
    >
      <Component {...props as any} />
    </Modalize>
  </>
);

export default Modal;
