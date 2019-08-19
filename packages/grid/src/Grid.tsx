import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { grid, GridProps } from 'styled-system';

import { Box } from './index';

const GridBox = styled(Box)<GridProps>`
  display: grid;
  ${grid}
`;

const Item = styled(Box)<GridProps>`
  ${grid}
`;

const Grid: React.FC = props => {
  const { children } = props;
  const theme = React.useContext(ThemeContext);

  return <GridBox
    gridTemplateColumns={theme ? `repeat(${theme.grid.columns}, 1fr)` : 'repeat(12, 1fr)'}
    gridColumnGap={theme ? theme.grid.gap : 10}
    {...props}
  >
    {children}
  </GridBox>;
};

interface GridItemProps {
  start?: (string | number)[];
  end?: (string | number)[];
  row?: (string | number)[];
}

function generateColumn(
  start: GridItemProps['start'],
  end: GridItemProps['end']
): string[] {
  if (start) {
    const map = start.map(
      (start: number | string, i: number): string => (
        `${start} / ${end ? end[i] : '-1'}`
      )
    );

    return map;
  } else {
    return ['1 / -1'];
  }
}

const GridItem: React.FC<GridItemProps> = props => {
  const { children, start, end, row } = props;
  const gridColum = generateColumn(start, end);
  return <Item gridColumn={gridColum} gridRow={row} {...props}>{children}</Item>;
};

GridItem.defaultProps = {
  start: [1],
  end: [-1],
  row: ['auto'],
};

export { Grid, GridItem };
