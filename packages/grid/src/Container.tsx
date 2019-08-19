import React from 'react';
import { ThemeContext } from 'styled-components';

import { Box } from './Box';


const Container: React.FC = props => {
  const theme = React.useContext(ThemeContext);

  return (
    <Box
      mx="auto"
      px={theme ? theme.grid.gap : 10}
      width="100%"
      maxWidth={theme ? theme.breakpoints : 1000}
      {...props}
    >{props.children}</Box>
  );
};

export default Container;
