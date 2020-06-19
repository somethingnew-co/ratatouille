import { useState, useEffect, useRef } from 'react';

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
    const { auto, autoTimeout, interval } = options;
    if (auto && !isRotating && typeof interval === 'number') {
      if (typeof autoTimeout === 'number' && autoTimeout > 0) {
        const timeout = setTimeout(autoRotate, options.autoTimeout);
        return () => clearTimeout(timeout);
      }
      else autoRotate();
    }
    else if (auto && isRotating && typeof interval === 'number') {
      const id = setInterval(next, interval);
      return () => clearInterval(id);
    }
  }, [index, isRotating, options]);

  const controls = { set, next, prev };

  return [index, controls, prevIndex];
}
