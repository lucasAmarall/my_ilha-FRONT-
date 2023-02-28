import React, { useEffect, useRef } from 'react';

const useAfterMount = (
  effect: () => void,
  deps: React.DependencyList | undefined,
) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      return effect();
    } else {
      isMounted.current = true;
    }
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    isMounted.current = false;
  }, []);
};

export { useAfterMount };
