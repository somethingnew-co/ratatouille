import React, { FC } from 'react';
import { ThemeContext } from 'styled-components';
import { makePropArray } from './utils';
import { SC } from './types';
import { Box } from './Box';
import { baseTheme } from './utils/theme';

// <Container>
/**
 * Extension of `<Box>` with max-width and padding
 * applied that corresponds to theme breakpoints.
 */
export const Container: FC<SC> = props => {
  const { children, ...rest } = props;
  const theme = React.useContext(ThemeContext);
  const margins = theme
    ? makePropArray(theme.grid.margins)
    : 0;

  let maxWidth;

  if (theme && Array.isArray(theme.grid.maxWidth)) {
    maxWidth = ['100%', ...theme.grid.maxWidth];
  } else if (theme && theme.grid.maxWidth) {
    ({ maxWidth } = theme.grid);
  } else {
    ({ maxWidth } = baseTheme.grid);
  }
  return (
    <Box
      mx="auto"
      px={margins}
      width="100%"
      maxWidth={maxWidth}
      {...rest}
    >{children}</Box>
  );
};
