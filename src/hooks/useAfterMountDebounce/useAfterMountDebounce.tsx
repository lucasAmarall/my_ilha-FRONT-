import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

const useAfterMountDebounce = (
  effect: EffectCallback,
  delay: number,
  deps?: DependencyList,
) => {
  const isMounted = useRef(false);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (isMounted.current) {
        return effect();
      } else {
        isMounted.current = true;
      }
    }, delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
};

export { useAfterMountDebounce };
