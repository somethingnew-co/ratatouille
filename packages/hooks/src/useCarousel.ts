import { useState, useEffect, useRef } from 'react';
import { useInterval } from '.';

function modulo(n: number, m: number): number {
  return ((n % m) + m) % m;
}

interface Config {
  auto?: boolean
  interval?: number
  autoTimeout?: number
}

interface Controls {
  set: (n: number) => void
  next: () => void
  prev: () => void
}

const configDefault = {
  auto: false,
  interval: 1000,
  autoTimeout: 5000,
};

export default function useCarousel(
  numberElements: number,
  config?: Config,
): [number, Controls, number] {
  const options = {
    ...configDefault,
    ...config,
  };

  const indexRef: { current: number } = useRef(0);
  const [index, setIndex] = useState(indexRef.current);
  const [previousIndex, setPreviousIndex] = useState(indexRef.current);
  const [isRotating, setIsRotating] = useState(options.auto);

  function updateIndex(n: number): void {
    setPreviousIndex(indexRef.current);
    indexRef.current = n;
    setIndex(indexRef.current);
  }

  function rotateIndex(n = 1): void {
    updateIndex(modulo(index + n, numberElements));
  }

  function next(): void {
    rotateIndex(1);
    setIsRotating(false);
  }

  function previous(): void {
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
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [index, isRotating, options]);

  useInterval(rotateIndex, options.auto && isRotating ? options.interval : null);

  const controls = { set, next, prev: previous };

  return [index, controls, previousIndex];
}
