import { useState } from 'react';
import UserService from '../../API/UserService/UserService';
import { validator } from '../../constants/validator';
import { useAfterMount } from '../../hooks/afterMount/afterMount';

const useSignUpContainer = ({
  toast,
  onClose,
}: {
  toast: any;
  onClose: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<SignUpFormData>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<SignUpFormDataErrors>({
    email: false,
    password: false,
  });

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
      await UserService.signUp(form);
      toast.addMessage({
        type: 'success',
        message: 'Conta criada com successo',
      });
      setForm({
        email: '',
        password: '',
      });
      onClose();
      setIsLoading(false);
    } catch (e) {
      console.log(e.response.data);
      toast.addMessage({
        type: 'error',
        message: 'Alguma coisa deu errado :(',
      });
      setIsLoading(false);
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
  };
};

export { useSignUpContainer };
