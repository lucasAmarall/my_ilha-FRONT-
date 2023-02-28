import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';

const useResetStateOnBlur = ({ value, setter }: IUseResetStateOnBlurProps) => {
  const [defaultValue] = useState({ ...value });

  const navigation = useNavigation();
  const reset = useCallback(() => {
    setter(defaultValue);
  }, [defaultValue, setter]);

  useEffect(() => {
    navigation.addListener('blur', reset);
  }, [navigation, reset]);

  return {};
};

export { useResetStateOnBlur };
