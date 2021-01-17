import React, { useRef, useEffect } from 'react';
import { Modalize } from 'react-native-modalize';

import { ModalProps } from './localGeneric';
import Main from './modal';

const Modal: React.FC<ModalProps> = ({ Component, props, shouldOpenModal }) => {
  const modalizeRef = useRef<Modalize>(null);

  const openModal = () => {
    modalizeRef.current?.open();
  };

  const handleModalStatus = () => {
    if (shouldOpenModal) {
      openModal();
    }
  };

  useEffect(() => {
    console.log('iae');
    handleModalStatus();
  }, [shouldOpenModal]);

  return (
    <Main
      Component={Component}
      props={props}
      modalizeRef={modalizeRef}
    />
  );
};

export default Modal;
