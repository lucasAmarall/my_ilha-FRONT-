type IToastMessage = {
  id: string | number;
  type: 'success' | 'error' | 'inform';
  message: string;
  read?: boolean;
};
