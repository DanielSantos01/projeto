export interface ModalProps {
  Component: any;
  props?: any;
  isCompact?: boolean;
  shouldOpen?: boolean;
  closeCompact?: () => void;
}

export interface MainProps {
  Component: any;
  props?: any;
  modalizeRef: any;
  isCompact?: boolean;
  closeCompact?: () => void;
}
