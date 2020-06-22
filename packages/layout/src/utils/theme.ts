import { DefaultTheme } from 'styled-components';
import { Theme as StyledSystemTheme } from 'styled-system';

export interface Theme extends DefaultTheme, StyledSystemTheme {
  grid: {
    columns: number
    columnGap: string | number | (string | number)[]
    maxWidth: string | number | (string | number)[]
    margins: string | number | (string | number)[]
  }
}
