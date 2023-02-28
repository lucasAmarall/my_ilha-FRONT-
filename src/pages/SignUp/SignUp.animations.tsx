import { useAnimateInputRadius } from '../../hooks/_animations/useAnimateInputRadius/useAnimateInputRadius';
import { useExpanderSection } from '../../hooks/_animations/useExpanderSection/useExpanderSection';

const useSignUpAnimations = ({ form }: IUseSignUpAnimationsProps) => {
  const email = useAnimateInputRadius(form.email, true);

  const password = useExpanderSection(form.password, true);

  return { email, password };
};

export { useSignUpAnimations };
