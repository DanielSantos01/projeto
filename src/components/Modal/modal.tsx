/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Modalize } from 'react-native-modalize';

import { MainProps } from './localGeneric';

const Modal: React.FC<MainProps> = ({
  Component,
  props,
  modalizeRef,
}) => (
  <>
    <Modalize
      snapPoint={150}
      ref={modalizeRef}
      alwaysOpen={30}
      avoidKeyboardLikeIOS
      modalStyle={{ flex: 1 }}
    >
      <LinearGradient
        useAngle
        angle={270}
        colors={['#0DB2D6', '#4FDA91']}
        locations={[0.0, 1.012]}
        style={{ flex: 1 }}
      >
        <Component {...props} />
      </LinearGradient>
    </Modalize>
  </>
);

export default Modal;
