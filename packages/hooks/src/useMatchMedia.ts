import { useEffect, useState } from 'react';

function useMatchMedia(mediaQuery: string): boolean | null {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    function onChange(this: MediaQueryList): void {
      setMatches(this.matches);
    }

    const mediaQueryList = window.matchMedia(mediaQuery);

    setMatches(mediaQueryList.matches);
    mediaQueryList.addListener(onChange);
    return () => {
      mediaQueryList.removeListener(onChange);
    };
  }, [mediaQuery]);

  return matches;
}

export default useMatchMedia;
