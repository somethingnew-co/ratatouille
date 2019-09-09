import React, { FC } from 'react';
import { ThemeContext } from 'styled-components';
import { makePropArray } from './helpers';
import { SC } from './types';
import { Box } from './Box';

// <Container>
/**
 * Extension of `<Box>` with max-width applied that corresponds to theme breakpoints.
 */
export const Container: FC<SC> = props => {
  const theme = React.useContext(ThemeContext);
  const gap = theme ? makePropArray(theme.grid.gap).map(gap => `${gap / 2}px`) : '10px';

  let maxWidth;

  if (theme && Array.isArray(theme.grid.maxWidth)) {
    maxWidth = ['100%', ...theme.grid.maxWidth];
  } else if (theme && theme.grid.maxWidth) {
    ({ maxWidth } = theme.grid);
  } else {
    maxWidth = 1000;
  }

  return (
    <Box
      mx="auto"
      px={gap}
      width="100%"
      maxWidth={maxWidth}
      {...props}
    >{props.children}</Box>
  );
};
