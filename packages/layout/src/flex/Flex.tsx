import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';
import { Box } from '../Box';
import { baseTheme, calcFlexPercentage, calcFlexGap } from '../helpers';
import { SC } from '../types';

const Flexbox = styled(Box)<FlexboxProps>`
  ${flexbox}
`;


// <Flex.Box>
/**
 * Extension of `<Box>` with `flexbox` props from styled-system.
 * If child is `<Flex.Row>`, use `<Flex.Container>` to offset negative margins.
 */
export const Flex = styled(Flexbox)<FlexboxProps>`
  display: flex;
`;


// <Flex.Item>
/**
 * Basic layout block intended to be used inside a flexbox container.
 * Identical to `<Flex.Box>` besides exclusion of `display: flex`.
 */
export const FlexItem = Flexbox;


// <Flex.Row>
interface Row {
  noPad?: boolean;
}

/**
 * Extension of `<Flex.Box>` with negative margins.
 * Intended to wrap `<Flex.Col>` components for bootstrap-style flexbox grid.
 * Must be inside `<Flex.Container>`, otherwise use `<Flex.Box>`.
 */
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


// <Flex.Col>
export interface Col {
  span?: number | number[];
  offset?: number | number[];
  push?: number | number[];
  pull?: number | number[];
  order?: number | number[];
}

/**
 * Child of `<Flex.Row>` with built in padding from theme for bootstrap-style grid.
 * Otherwise identical to `<Flex.Item>`.
 */
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

  return <Flexbox
    position={rest.position || 'relative'}
    px={theme && theme.grid ? calcFlexGap(theme) : calcFlexGap(baseTheme)}
    width={span ? calcFlexPercentage(span, theme) : '100%'}
    ml={offset ? calcFlexPercentage(offset, theme) : undefined}
    left={push ? calcFlexPercentage(push, theme) : undefined}
    right={pull ? calcFlexPercentage(pull, theme) : undefined}
    order={order || undefined}
    {...rest}
  >{children}</Flexbox>;

};
