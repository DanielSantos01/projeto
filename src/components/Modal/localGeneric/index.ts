import React, { MutableRefObject } from 'react';
import { Modalize } from 'react-native-modalize';

import { VisualizerProps } from '../../../screens/Visualizer/localGeneric';
import { NominationProps } from '../../Nomination/localGeneric';

export interface ModalProps {
  Component: React.FC<VisualizerProps> | React.FC<NominationProps>;
  props?: VisualizerProps | NominationProps;
  isCompact?: boolean;
  shouldOpen?: boolean;
  closeCompact?: () => void;
}

export interface MainProps {
  Component: React.FC<VisualizerProps> | React.FC<NominationProps>;
  props?: VisualizerProps | NominationProps;
  modalizeRef: MutableRefObject<Modalize>;
  isCompact?: boolean;
  closeCompact?: () => void;
}
