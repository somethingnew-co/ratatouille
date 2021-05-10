import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
} from 'styled-system';
import { props } from '@styled-system/should-forward-prop';

export interface TextProps
  extends ColorProps, LayoutProps, SpaceProps, TypographyProps {
  typeStyle?: string
}

const textProps: string[] = props.concat(['typeStyle']);

export const Text = styled('p').withConfig({
  shouldForwardProp: prop => !textProps.includes(prop),
})<TextProps>(
  compose(
    color,
    layout,
    space,
    typography,
  ),
  variant({
    prop: 'typeStyle',
    scale: 'typeStyles',
    variants: {
      default: {},
    },
  }),
);
