import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { flexbox, position, FlexboxProps, PositionProps } from 'styled-system';
import { Box } from './Box';
import { baseTheme, calcFlexPercentage, calcFlexGap } from './helpers';
import { SC } from './Grid.types';

/**
 * Base flexbox
 * Extension of <Box> component with flexbox props.
 */
const FlexBox = styled(Box)<FlexboxProps & PositionProps>`
  ${flexbox}
  ${position}
`;

/**
 * <Flex>
 * Extension of <FlexBox>. Naked flex container.
 */
export const Flex = styled(FlexBox)<FlexboxProps>`
  display: flex;
`;

/**
 * <FlexItem>
 * Extension of <FlexBox>. Naked <Flex> child component.
 */
export const FlexItem = FlexBox;

/**
 * <FlexRow>
 * Extension of <Flex> with negative margins.
 * Bootstrap-style grid row.
 */

interface Row {
  noPad?: boolean;
}

export const FlexRow: FC<SC & Row> = ({
  noPad,
  children,
  ...rest
}) => {
  const theme = React.useContext(ThemeContext);
  let margin: string | number | (string | number)[] = calcFlexGap(baseTheme, true);

  if (noPad) {
    margin = 0;
  } else if (theme && theme.grid) {
    margin = calcFlexGap(theme, true);
  }

  return <Flex mx={margin} {...rest}>{children}</Flex>;
};

/**
 * <FlexCol>
 * <FlexRow> child component.
 * Bootsrap-style grid column.
 */

export interface Col {
  span?: number | number[];
  offset?: number | number[];
  push?: number | number[];
  pull?: number | number[];
  order?: number | number[];
}

export const FlexCol: FC<SC & Col> = ({
  span,
  offset,
  push,
  pull,
  order,
  children,
  ...rest
}) => {
  const theme = React.useContext(ThemeContext);

  return <FlexBox
    px={theme && theme.grid ? calcFlexGap(theme) : calcFlexGap(baseTheme)}
    width={span ? calcFlexPercentage(span, theme) : '100%'}
    ml={offset ? calcFlexPercentage(offset, theme) : undefined}
    left={push ? calcFlexPercentage(push, theme) : undefined}
    right={pull ? calcFlexPercentage(pull, theme) : undefined}
    order={order || undefined}
    {...rest}
  >{children}</FlexBox>;

};
