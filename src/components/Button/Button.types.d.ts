type IButtonProps = {
  onPress: () => void;
  children?: string;
  loading?: boolean;
  variant?: 'text' | 'button';
};
