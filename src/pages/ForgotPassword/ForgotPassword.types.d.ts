type ForgotPasswordFormData = {
  code: string;
  password: string;
};

type ForgotPasswordFormDataErrors = {
  code: boolean;
  password: boolean;
};

type IUseForgotPasswordAnimationsProps = {
  form: ForgotPasswordFormDataErrors;
};
