import { useState } from 'react';
import { validator } from '../../constants/validator';
import { useAfterMount } from '../../hooks/afterMount/afterMount';

const useForgotPasswordContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<ForgotPasswordFormData>({
    code: '',
    password: '',
  });

  const [errors, setErrors] = useState<ForgotPasswordFormDataErrors>({
    code: false,
    password: false,
  });

  useAfterMount(() => {
    setErrors(e => ({
      ...e,
      code: !validator.isCode(form.code),
    }));
  }, [form.code]);

  useAfterMount(() => {
    setErrors(e => ({
      ...e,
      password: !validator.isStrongPassword(form.password),
    }));
  }, [form.password]);

  const updateFormValue = (key: object) => {
    setForm(e => ({ ...e, ...key }));
  };

  const submit = () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const isDisabled =
    !form.code || form.password.length < 2 || errors.code || errors.password;

  return {
    form,
    errors,
    submit,
    isLoading,
    isDisabled,
    updateFormValue,
  };
};

export { useForgotPasswordContainer };
