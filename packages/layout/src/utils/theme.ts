import { Theme as StyledSystemTheme } from 'styled-system';

/**
 * Base theme as fallback
 */

export interface Theme extends StyledSystemTheme {
  grid: {
    columns: number;
    gap: number | number[];
    maxWidth: string | number | (string | number)[];
  };
}

const breakpoints = ['600px', '900px', '1200px'];

export const baseTheme: Theme = {
  grid: {
    columns: 12,
    gap: [10, 20],
    maxWidth: 800,
  },
};

export const responsiveTheme: Theme = {
  grid: {
    columns: 12,
    gap: [10, 20],
    maxWidth: breakpoints,
  },
  breakpoints: [600, 900, 1200],
};
