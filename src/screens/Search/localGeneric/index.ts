/* eslint-disable no-unused-vars */
import React from 'react';

import { positionModel } from '../../../modules/geolocation/data/protocols';

export interface MainProps {
  fetchCities: (text: string) => void;
  manageClick: (click: any) => void;
  selectedPosition: coordinate;
  modalContent: () => any;
  shouldOpenModal: boolean;
  inputCity: string;
}

export type coordinate = positionModel;
