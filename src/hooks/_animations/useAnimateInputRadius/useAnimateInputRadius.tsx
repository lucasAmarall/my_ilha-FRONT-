import { useState } from 'react';
import { useAfterMountDebounce } from '../../useAfterMountDebounce/useAfterMountDebounce';

const useAnimateInputRadius = (valid: boolean, watch?: boolean) => {
  const [borderRadiusInput, setBorderRadiusInput] = useState(16);

  const test = () => {
    setBorderRadiusInput(valid ? 16 : 0);
  };

  useAfterMountDebounce(
    () => {
      if (watch) {
        test();
      }
    },
    valid ? 400 : 200,
    [valid],
  );

  return { borderRadiusInput, setBorderRadiusInput, test };
};

export { useAnimateInputRadius };
