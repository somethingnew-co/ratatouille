import styled from 'styled-components';
import {
  color,
  colorStyle,
  compose,
  layout,
  space,
  textStyle,
  typography,
  variant,
} from 'styled-system';

export interface TextProps {
  typeStyle?: string;
}

export const Text = styled('p')<TextProps>(
  textStyle,
  colorStyle,
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
  })
);
