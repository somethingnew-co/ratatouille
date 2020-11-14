import { useEffect, useState } from 'react';

function useMatchMedia(mediaQuery: string): boolean | null {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    /* istanbul ignore next */
    function onChange(this: MediaQueryList): void {
      setMatches(this.matches);
    }

    const mediaQueryList = window.matchMedia(mediaQuery);

    setMatches(mediaQueryList.matches);
    // deprecated method is for Safari support, replace with addEventListener
    mediaQueryList.addListener(onChange);
    return () => {
      mediaQueryList.removeListener(onChange);
    };
  }, [mediaQuery]);

  return matches;
}

export default useMatchMedia;
