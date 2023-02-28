import { useState } from 'react';
import { useAfterMountDebounce } from '../../useAfterMountDebounce/useAfterMountDebounce';

const useExpanderSection = (valid: boolean, watch?: boolean) => {
  const [showSection, setShowSection] = useState(false);

  const test = () => {
    setShowSection(!valid);
  };

  useAfterMountDebounce(
    () => {
      if (watch) {
        test();
      }
    },
    valid ? 200 : 400,
    [valid],
  );

  return { showSection, setShowSection };
};

export { useExpanderSection };
