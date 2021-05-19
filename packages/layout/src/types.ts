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
import { DefaultTheme } from 'styled-components';

export type Value = TLengthStyledSystem;
export type ResponsiveProp = ResponsiveValue<TLengthStyledSystem>;

export type BoxProps =
  & BackgroundProps
  & BorderProps
  & ColorProps
  & FlexboxProps
  & GridProps
  & LayoutProps
  & PositionProps
  & SpaceProps
  & TypographyProps
  & {
    spaceX?: ResponsiveProp
    sx?: ResponsiveProp
    spaceY?: ResponsiveProp
    sy?: ResponsiveProp
  }

export type ThemedBox = BoxProps & {
  theme: DefaultTheme & StyledSystemTheme & {
    grid: {
      columns: number
      columnGap: ResponsiveProp
      maxWidth: ResponsiveProp
      margins: ResponsiveProp
    }
  }
}

export type ColProps = ThemedBox & {
  span?: ResponsiveProp
  push?: ResponsiveProp
  pull?: ResponsiveProp
  offset?: ResponsiveProp
}
