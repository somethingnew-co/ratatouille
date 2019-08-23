import styled from 'styled-components';

import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

export interface BoxProps extends ColorProps, LayoutProps, PositionProps, SpaceProps, TypographyProps {}

/**
 * Basic layout building block.
 * Includes `color`, `layout`, `position`, `space`, and `typography` props from styled-system.
 * All `<Box>` components are un-styled except for `box-sizing: border-box`.
 */
export const Box = styled('div')<BoxProps>`
  &,
  &:after,
  &:before {
    box-sizing: border-box;
  }

  ${color}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;
