import ToastMessage from '../components/ToastMessage';
import { WindowProps, possibleMessageType } from '../components/ToastMessage/localGeneric';

export const nameErrorNofitication = (): void => {
  const notification: WindowProps = {
    type: possibleMessageType.ERROR,
    title: 'Ops...',
    description: 'O nome escolhido já pertence a outro local. Que tal tentar um diferente?',
  };
  ToastMessage(notification);
};

export const successNominationNotification = (placeName: string): void => {
  const notification: WindowProps = {
    type: possibleMessageType.SUCCESS,
    title: 'Sucesso!',
    description: `O lugar "${placeName}" Agora faz parte da sua lista de favoritos`,
  };
  ToastMessage(notification);
};

export const genericErrorNotification = (title: string, description: string): void => {
  const notification: WindowProps = {
    type: possibleMessageType.ERROR,
    title,
    description,
  };
  ToastMessage(notification);
};

export const genericSuccessNonification = (title: string, description: string) => {
  const notification: WindowProps = {
    type: possibleMessageType.SUCCESS,
    title,
    description,
  };
  ToastMessage(notification);
};
