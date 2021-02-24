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
  ResponsiveValue,
  TLengthStyledSystem,
  Theme as StyledSystemTheme,
} from 'styled-system';
import { DefaultTheme } from 'styled-components';

export type Value = TLengthStyledSystem
export type ResponsiveProp = ResponsiveValue<Value, Theme>

export interface Theme extends DefaultTheme, StyledSystemTheme {
  grid: {
    columns: number
    columnGap: ResponsiveProp
    maxWidth: ResponsiveProp
    margins: ResponsiveProp
  }
}

export interface BoxProps extends
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps { }

export interface BoxWithTheme extends BoxProps {
  theme: Theme
}

export interface ColProps extends BoxWithTheme {
  span?: ResponsiveProp
  push?: ResponsiveProp
  pull?: ResponsiveProp
  offset?: ResponsiveProp
}
