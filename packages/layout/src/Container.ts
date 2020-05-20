import styled from 'styled-components';
import { Box } from './Box';
import { BoxProps, BoxWithTheme } from './types';
import { makePropArray } from './utils';

function containerAttrs(props: BoxWithTheme): BoxProps {
  const { theme } = props;
  const margins = makePropArray(theme.grid.margins);

  let maxWidth;

  if (theme && Array.isArray(theme.grid.maxWidth)) {
    maxWidth = ['100%', ...theme.grid.maxWidth];
  } else {
    ({ maxWidth } = theme.grid);
  }

  return {

    mx: props.mx || 'auto',
    px: props.px || margins,
    width: props.width || '100%',
    maxWidth: props.maxWidth || maxWidth,
  };
}

/**
 * Extension of `<Box>` with max-width and padding applied.
 * This is used as a page or section wrapper.
 */
export const Container = styled(Box).attrs(containerAttrs)({});
