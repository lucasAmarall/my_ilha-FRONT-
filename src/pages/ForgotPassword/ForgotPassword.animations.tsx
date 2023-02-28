import { useAnimateInputRadius } from '../../hooks/_animations/useAnimateInputRadius/useAnimateInputRadius';
import { useExpanderSection } from '../../hooks/_animations/useExpanderSection/useExpanderSection';

const useForgotPasswordAnimations = ({
  form,
}: IUseForgotPasswordAnimationsProps) => {
  const code = useAnimateInputRadius(form.code, true);

  const password = useExpanderSection(form.password, true);

  return { code, password };
};

export { useForgotPasswordAnimations };
