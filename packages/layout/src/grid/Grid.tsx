import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { grid, GridProps, compose, system } from 'styled-system';
import { Box } from '../Box';
import { gap, columns } from '../utils/grid';
import { SC } from '../types';

type gridProp = string | number | (string | number)[]

const Grid = styled(Box)<GridProps>`
  display: grid;
  ${grid}
`;

interface GridItem extends GridProps{
  gridRowStart?: gridProp;
  gridRowEnd?: gridProp;
  gridColumnStart?: gridProp;
  gridColumnEnd?: gridProp;
}

const Item = styled(Box) <GridItem>(
  compose(grid),
  system({
    gridRowStart: true,
    gridRowEnd: true,
    gridColumnStart: true,
    gridColumnEnd: true,
  }),
);

// <Grid.Box>
/**
 * CSS grid layout block extending `<Box>`.
 * Includes `grid` props from `styled-system`.
 */
export const GridBox: FC<SC> = props => {
  const { children, ...rest } = props;
  const theme = React.useContext(ThemeContext);

  return <Grid
    gridTemplateColumns={columns(theme)}
    gridColumnGap={gap(theme)}
    gridRowGap={gap(theme)}
    {...rest}
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
  row?: gridProp;
  // grid-row-start
  rowStart?: gridProp;
  // grid-row-end
  rowEnd?: gridProp;
  // grid-column
  col?: gridProp;
  // grid-column-start
  colStart?: gridProp;
  // grid-column-end
  colEnd?: gridProp;
}

export const GridItem: FC<SC & GridItemProps> = props => {
  const { children, row, rowStart, rowEnd, col, colStart, colEnd, ...rest } = props;
  return (
    <Item
      gridColumn={col}
      gridRow={row}
      gridColumnStart={colStart}
      gridColumnEnd={colEnd}
      gridRowStart={rowStart}
      gridRowEnd={rowEnd}
      {...rest}
    >
      {children}
    </Item>
  );
};
