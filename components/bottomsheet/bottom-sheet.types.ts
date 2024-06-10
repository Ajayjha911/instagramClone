declare type RBSheetProps = {
  height?: number;
  minClosingHeight?: number;
  openDuration?: number;
  closeDuration?: number;
  closeOnDragDown?: boolean;
  closeOnPressMask?: boolean;
  onRequestClose: () => void;
  customStyles?: {
    wrapper?: object;
    container?: object;
    draggableIcon?: object;
  };
  onClose?: () => void;
  onOpen?: () => void;
};

export declare type BottomSheetRefProps = RBSheetProps & {
  open(): void;
  close(): void;
};

export declare type BottomSheetProps = {
  openBottomSheet: boolean;
  setOpenBottomSheet: (value: React.SetStateAction<boolean>) => void;
  children: any;
  height?: number;
};
