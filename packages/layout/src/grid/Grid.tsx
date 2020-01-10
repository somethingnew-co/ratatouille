import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { grid, GridProps } from 'styled-system';
import { Box } from '../Box';
import { generateColumnStrings } from '../utils';
import { gap, columns } from '../utils/grid';
import { SC } from '../types';

const Grid = styled(Box)<GridProps>`
  display: grid;
  ${grid}
`;

const Item = styled(Box)<GridProps>`
  ${grid}
`;

// <Grid.Box>
/**
 * CSS grid layout block extending `<Box>`.
 * Includes `grid` props from `styled-system`.
 */
export const GridBox: FC<SC> = props => {
  const { children } = props;
  const theme = React.useContext(ThemeContext);

  return <Grid
    gridTemplateColumns={columns(theme)}
    gridColumnGap={gap(theme)}
    gridRowGap={gap(theme)}
    {...props}
  >
    {children}
  </Grid>;
};

// <Grid.Item>
/**
 *
 * Basic layout block with `grid` props from [styled-system].
 * Identical to `<Grid.Box>` besides exclusion of `display: grid`,
 * and intended to be used inside a `<Grid.Box>` container.
 */
interface GridItemProps {
  // grid-row
  row?: string | number | (string | number)[];
  // grid-column
  col?: string | string[];
  // grid-column-start
  start?: number | number[];
  // grid-column-end
  end?: number | number[];
}

export const GridItem: FC<SC & GridItemProps> = props => {
  const { children, start, end, col, row } = props;
  const gridColumn = generateColumnStrings(start, end);

  return (
    <Item
      gridColumn={col || gridColumn}
      gridRow={row} {...props}>
      {children}
    </Item>
  );
};

GridItem.defaultProps = {
  start: [1],
  end: [-1],
  row: 'auto',
};
