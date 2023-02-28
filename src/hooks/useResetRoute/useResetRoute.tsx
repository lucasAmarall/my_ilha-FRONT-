import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { Paths } from '../../constants/Paths';

const useResetRoute = () => {
  const { reset } = useNavigation();

  const resetRoute = useCallback(
    (name: Paths, params?: unknown) => {
      reset({
        index: 0,
        routes: [{ name, ...params }],
      });
    },
    [reset],
  );

  return {
    resetRoute,
  };
};

export { useResetRoute };
