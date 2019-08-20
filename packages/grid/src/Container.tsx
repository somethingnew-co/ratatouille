/**
 * <Container>
 * Wrapper component based on styled-components theme
 */

import React, { FC } from 'react';
import { ThemeContext } from 'styled-components';
import { SC } from './Grid.types';

import { Box } from './Box';

export const Container: FC<SC> = props => {
  const theme = React.useContext(ThemeContext);

  return (
    <Box
      mx="auto"
      px={theme ? theme.grid.gap / 2 : '10px'}
      width="100%"
      maxWidth={theme ? theme.breakpoints : 1000}
      {...props}
    >{props.children}</Box>
  );
};
