import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import { Theme } from '../utils/theme';


export interface BoxProps extends
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps {}

export interface BoxWithTheme extends BoxProps {
  theme: Theme;
}

export interface ColProps extends BoxWithTheme {
  span?: number | number[];
  offset?: number | number[];
  push?: number | number[];
  pull?: number | number[];
  order?: number | number[];
}
