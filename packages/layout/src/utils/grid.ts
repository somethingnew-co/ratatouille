import { Theme, baseTheme } from './theme';
import { makePropArray } from '.';

/**
 * Generates Grid gap from theme
 */
export function gap(theme: Theme): (string | number)[] {
  let gaps = baseTheme.grid.columnGap;

  if (theme && theme.grid) {
    gaps = theme.grid.columnGap;
  }

  return makePropArray(gaps);
}

/**
 * Generates Grid columns from theme
 */
export function columns(theme: Theme): string {
  let { columns } = baseTheme.grid;

  if (theme && theme.grid) {
    ({ columns } = theme.grid);
  }

  return `repeat(${columns}, 1fr)`;
}
