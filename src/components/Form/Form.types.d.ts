type IForm = {
  disabled?: boolean;
  loading?: boolean;
  onSubmit?: () => void;
  children: Element | ReactNode;
  customBtn?: ReactNode;
};
