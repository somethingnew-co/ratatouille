/**
 * Base theme as fallback
 */
export const baseTheme = {
  grid: {
    columns: 12,
    gap: [10, 20],
  },
};

/**
 * Checks if prop is array
 */
export function makePropArray(n: number | number[]): number[] {
  let a: number[] = [];

  if (Array.isArray(n)) {
    a = n;
  } else {
    a.push(n);
  }

  return a;
}

/**
 * Returns array of strings used by CSS 'grid-column' property
 */
export function generateColumnStrings(
  start: number | number[],
  end?: number | number[]
): string[] {

  const s = makePropArray(start);
  const e = end ? makePropArray(end) : [];

  return s.map(
    (start: number | string, i: number): string => (
      `${start} / ${e[i] ? e[i] : -1}`
    )
  );
}

/**
 * Calculates flex percentages from theme
 */
export function calcFlexPercentage(n: number | number[], theme: {
  grid?: {
    column: number;
  };
}): string[] {
  const props = makePropArray(n);
  let col = 12;

  if (theme && theme.grid) {
    col = theme.grid.column;
  }

  return props.map(prop => `${prop / col * 100}%`);
}

/**
 * Calculates flex padding from theme
 */
export function calcFlexGap(
  theme: {
    grid?: {
      gap: number[];
    };
  },
  row = false

): number[] {
  let gaps = baseTheme.grid.gap;

  if (theme && theme.grid) {
    gaps = theme.grid.gap;
  }

  const val = makePropArray(gaps);

  return val.map(gap => gap / (row ? -2 : 2));
}
