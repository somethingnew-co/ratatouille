import styled from 'styled-components';

import {
  border,
  BorderProps,
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
  compose,
} from 'styled-system';

export interface BoxProps extends BorderProps, ColorProps, LayoutProps, PositionProps, SpaceProps, TypographyProps {}


/**
 * Basic layout building block.
 * Includes `border`, `color`, `layout`, `position`, `space`, and `typography` props from styled-system.
 * All `<Box>` components are un-styled except for `box-sizing: border-box`.
 */
export const Box = styled('div')<BoxProps>(
  compose(
    border,
    color,
    layout,
    position,
    space,
    typography,
  )
);
