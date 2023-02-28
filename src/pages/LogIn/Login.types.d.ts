type LoginFormData = {
  email: string;
  password: string;
};

type LoginFormDataErrors = {
  email: boolean;
  password: boolean;
};

type IUseLogInAnimationsProps = {
  form: LoginFormDataErrors;
};
