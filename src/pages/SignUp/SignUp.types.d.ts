type SignUpFormData = {
  email: string;
  password: string;
};

type SignUpFormDataErrors = {
  email: boolean;
  password: boolean;
};

type IUseSignUpAnimationsProps = {
  form: SignUpFormDataErrors;
};
