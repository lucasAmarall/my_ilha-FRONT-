type IInputProps = {
  value: string;
  label: string;
  success?: boolean;
  error?: boolean;
  message?: string;
  showMessage?: boolean;
  onChange: (v: string) => void;
  loading?: boolean;
  bordersRadius?: {
    topLeft?: number;
    topRight?: number;
    bottomLeft?: number;
    bottomRight?: number;
  };
};

interface IUseInputAnimationsProps {
  success?: boolean;
  error?: boolean;
  focused?: boolean;
  value: string;
  bordersRadius?: {
    topLeft?: number;
    topRight?: number;
    bottomLeft?: number;
    bottomRight?: number;
  };
}
