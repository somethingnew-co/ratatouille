import styled from 'styled-components';
import { Box } from './Box';
import { BoxProps, ThemedBox, Value } from './types';

/**
 * Extension of `<Box>` with max-width and padding applied.
 * This is used as a page or section wrapper.
 */
export const Container = styled(Box).attrs(({ theme }: ThemedBox): BoxProps => {
  let { maxWidth } = theme.grid;

  if (Array.isArray(maxWidth)) {
    maxWidth = ['100%', ...theme.grid.maxWidth as (Value)[]];
  }

  return {
    width: '100%',
    marginX: 'auto',
    paddingX: theme.grid.margins,
    maxWidth,
  };
})({});
