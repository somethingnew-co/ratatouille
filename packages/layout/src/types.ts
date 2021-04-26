import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ResponsiveValue,
  SpaceProps,
  Theme as StyledSystemTheme,
  TLengthStyledSystem,
  TypographyProps,
} from 'styled-system';
import { DefaultTheme } from 'styled-components';

export type Value = TLengthStyledSystem;
export type ResponsiveProp = ResponsiveValue<Value, Theme>;

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
  TypographyProps {
  spaceX?: ResponsiveProp
  sx?: ResponsiveProp
  spaceY?: ResponsiveProp
  sy?: ResponsiveProp
}

export interface ThemedBox extends BoxProps {
  theme: Theme
}

export interface ColProps extends ThemedBox {
  span?: ResponsiveProp
  push?: ResponsiveProp
  pull?: ResponsiveProp
  offset?: ResponsiveProp
}
