/* eslint-disable no-unused-vars */

export type WindowProps = {
  type: possibleMessageType;
  title: string;
  description: string;
};

export enum possibleMessageType {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
}
