import styled from 'styled-components';
import { BoxProps } from './types';
import { props as styledSystemProps } from '@styled-system/should-forward-prop';

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


const styledBox = compose(
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

const customProps = [
  'span',
  'offset',
  'push',
  'pull',
];

const props: string[] = styledSystemProps.concat(customProps);

/**
 * Basic layout building block. Includes `background`, `border`, `color`,
 * `flexbox`, `grid`, `layout`, `position`, `space`,  and `typography`
 * props from `styled-system`. All `<Box>` components render a `div`
 * by default and have no styling applied.
 */
export const Box = styled('div')
  .withConfig({
    shouldForwardProp: prop => !props.includes(prop),
  })<BoxProps>(styledBox);
