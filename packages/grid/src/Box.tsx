import styled from 'styled-components';

import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

export interface BoxProps extends ColorProps, SpaceProps, LayoutProps, TypographyProps {}

export const Box = styled.div<BoxProps>`
  ${color}
  ${layout}
  ${space}
  ${typography}
`;
