import { useRef, createRef, RefObject } from 'react';

function useRefs(array: any[]): RefObject<any>[] {
  const refs = useRef<RefObject<any>[]>([]);
  refs.current = Array.from(array, (_, i) => refs.current[i] || createRef());
  return refs.current;
}

export default useRefs;
