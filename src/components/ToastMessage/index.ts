import Toast from 'react-native-toast-message';
import { WindowProps } from './localGeneric';

const ToastWindow = (props: WindowProps) => {
  const { title, description, type } = props;
  Toast.show({
    type,
    position: 'top',
    text1: title,
    text2: description,
  });
};

export default ToastWindow;
