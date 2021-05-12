import { useRef, createRef, MutableRefObject } from 'react';

function useRefs(array: any[]): MutableRefObject<any>[] {
  const refs = useRef<MutableRefObject<any>[]>([]);
  refs.current = [...array].map((_, index) => refs.current[index] || createRef());
  return refs.current;
}

export default useRefs;
