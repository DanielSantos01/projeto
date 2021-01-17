import HandleNavigation from '../HandleNavigation';
import { ReceivedProps } from './localGeneric';

export const openPreRegister = (props: ReceivedProps) => {
  const { latitude, longitude } = props;
  HandleNavigation.navigate('Preview', {
    latitude,
    longitude,
  });
};
