// <Grid>

import styled from 'styled-components';
import { Box, BoxProps } from './Box';
import { Theme } from './utils/theme';
import { gap, columns } from './utils/grid';

interface Grid extends BoxProps{
  theme: Theme;
}

const gridAttrs = (props: Grid): BoxProps => ({
  gridTemplateColumns: props.gridTemplateColumns || columns(props.theme),
  gridColumnGap: props.gridColumnGap || gap(props.theme),
});

/**
 * Extension of [`<Box>`] with `display: grid`.
 *`<Grid>` has `grid-template-columns` and `grid-column-gap` applied,
 * corresponding  `theme.grid.columns` and `theme.grid.columnGap`, respectively.
 * `grid-template-columns` defaults to `repeat(n, 1fr)` to fill available space,
 * but this can be overridden using styled-system's grid props.
 */
export const Grid = styled(Box).attrs(gridAttrs)`
  display: grid;
`;