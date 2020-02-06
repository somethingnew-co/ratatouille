import { Theme as StyledSystemTheme } from 'styled-system';

/**
 * Base theme as fallback
 */

export interface Theme extends StyledSystemTheme {
  grid: {
    columns: number;
    columnGap: string | number | (string | number)[];
    maxWidth: string | number | (string | number)[];
    margins: string | number | (string | number)[];
  };
}

const breakpoints = ['600px', '900px', '1200px'];

export const baseTheme: Theme = {
  grid: {
    columns: 12,
    columnGap: 20,
    maxWidth: 960,
    margins: 20,
  },
};

export const responsiveTheme: Theme = {
  grid: {
    columns: 12,
    columnGap: ['1rem', 20, '5%'],
    maxWidth: breakpoints,
    margins: ['1rem', 20, '5%'],
  },
  breakpoints: [600, 900, 1200],
};
