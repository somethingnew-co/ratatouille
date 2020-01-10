import { Theme, baseTheme } from './theme';
import { makePropArray } from '.';

/**
 * Generates Grid gap from theme
 */
export function gap(theme: Theme): number[] {
  let gaps = baseTheme.grid.gap;

  if (theme && theme.grid) {
    gaps = theme.grid.gap;
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
