import React, { useRef, useEffect } from 'react';
import { Modalize } from 'react-native-modalize';

import { ModalProps } from './localGeneric';
import Main from './modal';

const Modal: React.FC<ModalProps> = ({
  Component,
  props,
  isCompact,
  shouldOpen,
  closeCompact,
}) => {
  const modalizeRef = useRef<Modalize>(null);

  const openModal = () => {
    modalizeRef.current?.open();
  };

  const closeModal = () => {
    modalizeRef.current?.close();
  };

  const handleModal = () => {
    if (shouldOpen) {
      openModal();
    } else {
      closeModal();
    }
  };

  useEffect(() => {
    if (isCompact) handleModal();
  }, [isCompact, shouldOpen]);

  return (
    <Main
      Component={Component}
      props={props}
      modalizeRef={modalizeRef}
      isCompact={isCompact}
      closeCompact={closeCompact}
    />
  );
};

export default Modal;
