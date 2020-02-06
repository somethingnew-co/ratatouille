import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';
import { Box } from '../Box';
import { calcFlexPercentage, calcFlexGap, calcFlexMargin } from '../utils';
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
  flexDirection,
  flexWrap,
  ...rest
}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Flex
      flexDirection={flexDirection || 'row'}
      flexWrap={flexWrap || 'wrap'}
      mx={calcFlexMargin(theme, noPad)}
      {...rest}>
      {children}
    </Flex>
  );
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

  const spanFlex = (spans: number | number[]): string[] => {
    const flex = calcFlexPercentage(spans, theme);
    return flex.map(p => `0 0 ${p}`);
  };

  return <Flexbox
    position={rest.position || 'relative'}
    px={calcFlexGap(theme)}
    ml={offset ? calcFlexPercentage(offset, theme) : undefined}
    left={push ? calcFlexPercentage(push, theme) : undefined}
    right={pull ? calcFlexPercentage(pull, theme) : undefined}
    order={order || undefined}
    flex={span ? spanFlex(span) : '1'}
    {...rest}
  >{children}</Flexbox>;

};
