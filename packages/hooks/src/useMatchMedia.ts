import { useEffect, useState } from 'react';

function useMatchMedia(mediaQuery: string): boolean | null {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    /* istanbul ignore next */
    function onChange(mediaQueryList: MediaQueryListEvent): void {
      setMatches(mediaQueryList.matches);
    }

    const mediaQueryList = window.matchMedia(mediaQuery);

    setMatches(mediaQueryList.matches);
    // deprecated method is for Safari support, replace with addEventListener
    mediaQueryList.addEventListener('change', onChange);
    return () => {
      mediaQueryList.removeEventListener('change', onChange);
    };
  }, [mediaQuery]);

  return matches;
}

export default useMatchMedia;
