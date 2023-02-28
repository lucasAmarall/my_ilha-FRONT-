import { useAnimateInputRadius } from '../../hooks/_animations/useAnimateInputRadius/useAnimateInputRadius';
import { useExpanderSection } from '../../hooks/_animations/useExpanderSection/useExpanderSection';

const useLogInAnimations = ({ form }: IUseLogInAnimationsProps) => {
  const email = useAnimateInputRadius(form.email, true);

  const password = useExpanderSection(form.password, true);

  return { email, password };
};

export { useLogInAnimations };
