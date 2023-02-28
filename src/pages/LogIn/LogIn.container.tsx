import { useState } from 'react';
import APIService from '../../API/APIService';
import UserService from '../../API/UserService/UserService';
import { Paths } from '../../constants/Paths';
import { validator } from '../../constants/validator';
import { useAfterMount } from '../../hooks/afterMount/afterMount';
import { useResetRoute } from '../../hooks/useResetRoute/useResetRoute';
import { useToast } from '../../hooks/useToast/useToast';

const useLoginContainer = () => {
  const [onSignUp, setOnSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { resetRoute } = useResetRoute();
  const [form, setForm] = useState<LoginFormData>({
    email: '',
    password: 'x  ```',
  });

  const [errors, setErrors] = useState<LoginFormDataErrors>({
    email: false,
    password: false,
  });

  const toast = useToast();

  useAfterMount(() => {
    setErrors(e => ({
      ...e,
      email: !validator.isEmail(form.email),
    }));
  }, [form.email]);

  useAfterMount(() => {
    setErrors(e => ({
      ...e,
      password: !validator.isStrongPassword(form.password),
    }));
  }, [form.password]);

  const updateFormValue = (key: object) => {
    setForm(e => ({ ...e, ...key }));
  };

  const submit = async () => {
    try {
      setIsLoading(true);
      const { data } = await UserService.signIn(form);
      APIService.setHeaderToken(data.token);
      resetRoute(Paths.app_stack);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      toast.addMessage({
        type: 'error',
        message: 'Email ou senha inválidos',
      });
    }
  };

  const isDisabled =
    !form.email || form.password.length < 2 || errors.email || errors.password;

  return {
    form,
    errors,
    submit,
    isLoading,
    isDisabled,
    updateFormValue,
    onSignUp,
    setOnSignUp,
    toast,
  };
};

export { useLoginContainer };
