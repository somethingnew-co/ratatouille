import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay?: number): void {
  const savedCallback = useRef<() => void>();
  const intervalRef = useRef<number>(-1);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick(): void {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null && intervalRef.current === -1) {
      intervalRef.current = setInterval(tick, delay);
      return () => clearInterval(intervalRef.current);
    }
  }, [delay]);
}

export default useInterval;
