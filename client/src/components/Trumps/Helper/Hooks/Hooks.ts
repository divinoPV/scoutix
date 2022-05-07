import { useEffect, useRef } from 'react';

type UseHook = (
  callback: () => void,
  deps: any[],
) => void;

export const useFirstEffect: UseHook = (effect, deps) => {
  const firstUpdate = useRef<boolean>(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;

      return;
    }

    effect();
  }, deps);
};
