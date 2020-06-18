import { useState, useEffect, useRef, useCallback } from 'react';
import { useInterval } from '.';

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

const defaults = {
  auto: false,
  interval: 1000,
  autoTimeout: 5000,
};

export default function useCarousel(numElements = 0, config = {}): (number | { set: (n: any) => void; next: () => void; prev: () => void } | undefined)[] {
  const options = {
    ...defaults,
    ...config,
  };

  const indexRef: { current: number } = useRef(0);
  const [index, setIndex] = useState(indexRef.current);
  const [prevIndex, setPrevIndex] = useState(indexRef.current);
  const [isRotating, setIsRotating] = useState(options.auto);

  const updateIndex = useCallback((n: number): void => {
    setPrevIndex(indexRef.current);
    indexRef.current = n;
    setIndex(indexRef.current);
  }, [setPrevIndex, setIndex, indexRef]);

  const rotateIndex = useCallback((n = 1): void => {
    updateIndex(mod(index + n, numElements));
  }, [updateIndex, index, numElements]);

  const next = useCallback((): void => {
    rotateIndex(1);
    setIsRotating(false);
  }, []);

  const prev = useCallback((): void => {
    rotateIndex(-1);
    setIsRotating(false);
  }, [rotateIndex, setIsRotating]);

  const set = useCallback((n: number): void => {
    updateIndex(n);
    setIsRotating(false);
  }, [updateIndex, setIsRotating]);

  const autoRotate = useCallback((): void => {
    setIsRotating(true);
  }, [setIsRotating]);

  useEffect(() => {
    if (options.auto && options.autoTimeout > 0 && !isRotating) {
      const timeout = setTimeout(autoRotate, options.autoTimeout);
      return () => clearTimeout(timeout);
    }
  }, [index, isRotating, options]);

  if (options.auto && isRotating) useInterval(rotateIndex, options.interval);

  const controls = { set, next, prev };

  return [index, controls, prevIndex];
}
