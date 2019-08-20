import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { grid, GridProps } from 'styled-system';
import { Box } from './Box';
import { baseTheme, generateColumnStrings } from './helpers';
import { SC } from './Grid.types';

/**
 * Base styled components
 */
const GridBox = styled(Box)<GridProps>`
  display: grid;
  ${grid}
`;

const Item = styled(Box)<GridProps>`
  ${grid}
`;

/**
 * <Grid>
 * CSS Grid component from styled-components theme
 */
export const Grid: FC<SC> = props => {
  const { children } = props;
  const theme = React.useContext(ThemeContext);

  return <GridBox
    gridTemplateColumns={`repeat(${theme ? theme.grid.columns : baseTheme.grid.columns}, 1fr)`}
    gridColumnGap={theme ? theme.grid.gap : baseTheme.grid.gap}
    gridRowGap={theme ? theme.grid.gap : baseTheme.grid.gap}
    {...props}
  >
    {children}
  </GridBox>;
};

/**
 * <GridItem>
 * <Grid> component child
 */
interface GridItemProps {
  start?: number | number[]; // grid-column-start
  end?: number | number[]; // grid-column-end
  col?: string | string[]; // grid-column
  row?: string | number | (string | number)[]; // grid-row
}

export const GridItem: FC<SC & GridItemProps> = props => {
  const { children, start, end, col, row } = props;
  let gridColumn = ['1 / -1'];

  if (start) {
    gridColumn = generateColumnStrings(start, end);
  }

  return <Item gridColumn={col || gridColumn} gridRow={row} {...props}>{children}</Item>;
};

GridItem.defaultProps = {
  start: [1],
  end: [-1],
  row: 'auto',
};
