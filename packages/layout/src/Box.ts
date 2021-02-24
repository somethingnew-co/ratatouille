import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  space,
  typography,
  compose,
} from 'styled-system';
import { BoxProps } from './types';
import { props } from '@styled-system/should-forward-prop';

export const box = compose(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  space,
  typography,
);

const boxProps: string[] = props.concat([
  'span',
  'offset',
  'push',
  'pull',
]);

/**
 * Basic layout building block. Includes `background`, `border`, `color`,
 * `flexbox`, `grid`, `layout`, `position`, `space`,  and `typography`
 * props from `styled-system`. All `<Box>` components render a `div`
 * by default and have no styling applied.
 */
export const Box = styled('div').withConfig({
  shouldForwardProp: prop => !boxProps.includes(prop),
})<BoxProps>(box);
