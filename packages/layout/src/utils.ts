import { ResponsiveProp, Value } from './types';

type Transformer = (prop: ResponsiveProp) => ResponsiveProp
type TransformProp = (func: (value: Value) => Value) => Transformer

export const trimUnit = (s: string): string => s.replace(/([0-9]|\.|,)+([\S]+)?/, '$2').trim();

export const transformProp: TransformProp = transform =>
  prop => {
    if (Array.isArray(prop)) {
      return (prop as Value[]).map(transform);
    }

    if (prop instanceof Object) {
      const init: { [s: string]: Value } = {};
      return Object.entries(prop).reduce((acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = transform(value);
        }
        return acc;
      }, init);
    }

    return transform(prop as Value);
  };

export const calcSpan = (columns: number): Transformer =>
  transformProp((value: Value) => {
    const int = typeof value === 'string' ? parseInt(value, 10) : value;
    return `${(int / columns) * 100}%`;
  });

export const calcGutter = (isRow: boolean): Transformer =>
  transformProp((gap: Value) => {
    const i = isRow ? -1 : 1;

    if (typeof gap === 'string') {
      const [value, unit] = [parseFloat(gap), trimUnit(gap)];
      return value / (2 * i) + unit;
    }

    return gap / (2 * i);
  });

export const calcRowGutter = calcGutter(true);
export const calcColGutter = calcGutter(false);

export const flexBasis = transformProp((value: Value) => `0 0 ${value}`);

export const isReverse = (prop: ResponsiveProp): boolean => {
  if (Array.isArray(prop)) {
    return prop.includes('row-reverse') || prop.includes('column-reverse');
  }

  if (prop instanceof Object) {
    const test = Object.values(prop);
    return test.includes('row-reverse') || test.includes('column-reverse');
  }

  return prop === 'row-reverse' || prop === 'column-reverse';
};
