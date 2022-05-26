import { useEffect, useRef } from 'react';

const useFirstEffect: (
  callback: () => void,
  deps: any[],
) => void = (
  effect,
  deps
) => {
  const firstUpdate = useRef<boolean>(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;

      return;
    }

    effect();
  }, deps);
};

export default useFirstEffect;
