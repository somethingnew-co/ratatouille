import { makePropArray } from '.';
import { Theme } from './theme';

const trimUnit = (s: string): string => s.replace(/([0-9]|\.|,)+([\S]+)?/, '$2').trim();

/**
 * Calculates flex percentages from theme
 */
export function calcFlexPercentage(n: number | number[], theme: Theme): string[] {
  const props = makePropArray(n);
  const { columns } = theme.grid;

  return props
    .map(prop => parseFloat(prop as string))
    .map(prop => `${prop / columns * 100}%`);
}

/**
 * Calculates flex gap from theme
 */
export function calcFlexGap(theme: Theme, scale = 1): (string | number)[] {
  const { columnGap } = theme.grid;
  const gaps = makePropArray(columnGap);

  return gaps.map(gap => {
    if (typeof gap === 'string') {
      const unit = trimUnit(gap);
      const value = parseFloat(gap);
      return (value / (2 * scale)) + unit;
    }

    return gap / (2 * scale);
  });
}
