/* eslint-disable @typescript-eslint/ban-types */
import { createRef } from 'react';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';

export const isReadyRef = createRef<NavigationContainerRef>();

export const navigationRef = createRef<NavigationContainerRef>();

const navigate = (name: string, params?: Object): void => {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};

const push = (name: string, params?: Object): void => {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.push(name, params));
  }
};

const goBack = (): void => {
  if (navigationRef.current) {
    navigationRef.current.goBack();
  }
};

export default {
  navigate,
  goBack,
  push,
};
