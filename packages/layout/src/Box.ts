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
  styleFn,
  typography,
} from 'styled-system';
import { BoxProps, ResponsiveProp } from './types';
import { props } from '@styled-system/should-forward-prop';
import styledCss from '@styled-system/css';
import { isReverse } from './utils';

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
);

const boxProps: string[] = props.concat([
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

/**
 * Basic layout building block. Includes `background`, `border`, `color`,
 * `flexbox`, `grid`, `layout`, `position`, `space`,  and `typography`
 * props from `styled-system`. All `<Box>` components render a `div`
 * by default and have no styling applied.
 */
export const Box = styled('div').withConfig({
  shouldForwardProp: prop => !boxProps.includes(prop),
})<BoxProps>(box, spaceExtension);
