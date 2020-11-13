import { useRef, createRef, MutableRefObject } from 'react';

function useRefs(array: any[]): MutableRefObject<any>[] {
  const refs = useRef<MutableRefObject<any>[]>([]);
  refs.current = Array.from(array, (_, i) => refs.current[i] || createRef());
  return refs.current;
}

export default useRefs;
