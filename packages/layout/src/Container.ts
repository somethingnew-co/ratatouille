import styled from 'styled-components';
import { Box } from './Box';

/**
 * Extension of `<Box>` with max-width and padding applied.
 * This is used as a page or section wrapper.
 */
export const Container = styled(Box).attrs(({ theme }) => {
  let { maxWidth } = theme.grid;

  if (Array.isArray(maxWidth)) {
    maxWidth = ['100%', ...theme.grid.maxWidth];
  }

  return {
    width: '100%',
    marginX: 'auto',
    paddingX: theme.grid.margins,
    maxWidth,
  };
})({});
