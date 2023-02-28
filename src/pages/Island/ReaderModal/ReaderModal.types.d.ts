interface IReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (url: string) => void;
}
