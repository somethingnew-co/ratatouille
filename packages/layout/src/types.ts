import { Property } from 'csstype';
import { DefaultTheme } from 'styled-components';
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
  TypographyProps,
  TLengthStyledSystem,
  Theme as StyledSystemTheme,
} from 'styled-system';

export type Value = TLengthStyledSystem;
export type ResponsiveProp = ResponsiveValue<TLengthStyledSystem>;

export interface BoxProps extends
  BackgroundProps,
  BorderProps,
  // This clashes with @types/react, which thinks it's a DOM attribute and
  // wants it to be a string. This is a temporary workaround.
  Omit<ColorProps, 'color'>,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps
{
  spaceX?: ResponsiveProp
  sx?: ResponsiveProp
  spaceY?: ResponsiveProp
  sy?: ResponsiveProp

  // Custom prop to allow responsive text color props.
  textColor?: ResponsiveValue<Property.Color>
}

export interface ThemedBox extends BoxProps {
  theme: DefaultTheme & StyledSystemTheme & {
    grid: {
      columns: number
      columnGap: ResponsiveProp
      maxWidth: ResponsiveProp
      margins: ResponsiveProp
    }
  }
}

export interface ColProps extends ThemedBox {
  span?: ResponsiveProp
  push?: ResponsiveProp
  pull?: ResponsiveProp
  offset?: ResponsiveProp
}
