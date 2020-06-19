import { useState, useEffect, useRef } from 'react';
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

  function updateIndex(n: number): void {
    setPrevIndex(indexRef.current);
    indexRef.current = n;
    setIndex(indexRef.current);
  }

  function rotateIndex(n = 1): void {
    updateIndex(mod(index + n, numElements));
  }

  function next(): void {
    rotateIndex(1);
    setIsRotating(false);
  }

  function prev(): void {
    rotateIndex(-1);
    setIsRotating(false);
  }

  function set(n: number): void {
    updateIndex(n);
    setIsRotating(false);
  }

  function autoRotate(): void {
    setIsRotating(true);
  }

  useEffect(() => {
    if (options.auto && options.autoTimeout > 0 && !isRotating) {
      const timeout = setTimeout(autoRotate, options.autoTimeout);
      return () => clearTimeout(timeout);
    }
  }, [index, isRotating, options]);

  useInterval(rotateIndex, options.auto && isRotating ? options.interval : undefined);

  const controls = { set, next, prev };

  return [index, controls, prevIndex];
}
