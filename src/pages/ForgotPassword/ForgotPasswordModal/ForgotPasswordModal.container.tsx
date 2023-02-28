import { useEffect, useState } from 'react';
import { validator } from '../../../constants/validator';
const useForgotPasswordModalContainer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsVisible(false);
    }, 2000);
  };

  useEffect(() => {
    setDisabled(!validator.isEmail(email));
    setHasError(!!email && !validator.isEmail(email));

    if (!!email && !validator.isEmail(email)) {
      setErrorMessage('Email inválido');
    }
  }, [email]);

  return {
    email,
    setEmail,
    hasError,
    disabled,
    submit,
    errorMessage,
    loading,
    isVisible,
  };
};

export { useForgotPasswordModalContainer };
