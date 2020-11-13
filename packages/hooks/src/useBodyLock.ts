import { useEffect } from 'react';

function useBodyLock(bool = true): void {
  useEffect(() => {
    if (bool) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return (): void => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [bool]);
}

export default useBodyLock;
