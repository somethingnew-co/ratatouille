import styled, { css } from 'styled-components';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  style,
  styleFn,
  typography,
} from 'styled-system';
import { BoxProps, ResponsiveProp } from './types';
import { props } from '@styled-system/should-forward-prop';
import styledCss from '@styled-system/css';
import { isReverse } from './utils';

const textColor = style({
  prop: 'textColor',
  cssProperty: 'color',
  key: 'colors',
});


const boxProperties: Set<string> = new Set([
  ...props,
  'span',
  'offset',
  'push',
  'pull',
  'spaceX',
  'sx',
  'spaceY',
  'sy',
]);

const spaceSystem = ({ spaceX, sx, spaceY, sy, flexDirection }: BoxProps): styleFn => {
  if (isReverse(flexDirection as ResponsiveProp)) {
    return styledCss({
      marginRight: spaceX,
      mr: sx,
      marginBottom: spaceY,
      mb: sy,
    });
  }

  return styledCss({
    marginLeft: spaceX,
    ml: sx,
    marginTop: spaceY,
    mt: sy,
  });
};


const spaceExtension = css`
  & > * + * {
    ${spaceSystem}
  }
`;

const box = compose(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  space,
  typography,

  // Custom properties
  textColor,
);

/**
 * Basic layout building block. Includes `background`, `border`, `color`,
 * `flexbox`, `grid`, `layout`, `position`, `space`,  and `typography`
 * props from `styled-system`. All `<Box>` components render a `div`
 * by default and have no styling applied.
 */
export const Box = styled('div').withConfig({
  shouldForwardProp: prop => !boxProperties.has(prop),
})<BoxProps>(box, spaceExtension);
