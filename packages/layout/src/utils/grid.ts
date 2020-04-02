import { makePropArray } from '.';
import { Theme } from './theme';

/**
 * Generates Grid gap from theme
 */
export function gap(theme: Theme): (string | number)[] {
  const gaps = theme.grid.columnGap;
  return makePropArray(gaps);
}

/**
 * Generates Grid columns from theme
 */
export function columns(theme: Theme): string {
  const { columns } = theme.grid;
  return `repeat(${columns}, 1fr)`;
}
