import { Theme, baseTheme } from './theme';

type arrayProp = string | number | (string | number)[]

const trimUnit = (s: string): string => s.replace(/([0-9]|\.|,)+([\S]+)?/, '$2').trim();

/**
 * Checks if prop is array
 */
export function makePropArray(n: arrayProp): (string | number)[] {
  let a = [];

  if (Array.isArray(n)) {
    a = n;
  } else {
    a.push(n);
  }

  return a;
}

/**
 * Calculates flex percentages from theme
 */
export function calcFlexPercentage(n: number | number[], theme: Theme): string[] {
  const props = makePropArray(n);
  let col = 12;

  if (theme && theme.grid) {
    col = theme.grid.columns;
  }

  return props
    .map(prop => parseFloat(prop as string))
    .map(prop => `${prop / col * 100}%`);
}

/**
 * Calculates flex padding from theme
 */
export function calcFlexGap(theme: Theme, row = false): (string | number)[] {
  let gaps = baseTheme.grid.columnGap;

  if (theme && theme.grid) {
    gaps = theme.grid.columnGap;
  }

  const val = makePropArray(gaps);


  return val.map(gap => {
    if (typeof gap === 'string') {
      const unit = trimUnit(gap);
      const float = parseFloat(gap);
      return (float / (row ? -2 : 2)) + unit;
    }

    return gap / (row ? -2 : 2);
  });
}

/**
 * Calculates flex margin from theme
 */
export function calcFlexMargin(theme: Theme, noPad?: boolean): string | number | (string | number)[] {
  if (noPad) {
    return 0;
  } else if (theme && theme.grid) {
    return calcFlexGap(theme, true);
  }
  return calcFlexGap(baseTheme, true);
}
