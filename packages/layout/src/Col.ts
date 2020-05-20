import styled from 'styled-components';
import { Box, BoxProps } from './Box';
import { calcFlexPercentage, calcFlexGap } from './utils/flex';
import { Theme } from './utils/theme';

// <Col>
interface Col extends BoxProps {
  theme: Theme;
  span?: number | number[];
  offset?: number | number[];
  push?: number | number[];
  pull?: number | number[];
  order?: number | number[];
}

const colAttrs = (props: Col): BoxProps => {
  const {
    theme,
    span,
    offset,
    push,
    pull,
    order,
  } = props;

  const flex = calcFlexPercentage(span || theme.grid.columns, theme);
  const calcFlex = (percent: string): string => `0 0 ${percent}`;

  return {
    flex: props.flex || span ? flex.map(calcFlex) : '1',
    maxWidth: props.maxWidth || flex,
    px: props.px || props.paddingX || calcFlexGap(theme),
    ml: props.mx || props.marginX ? null : props.ml || offset && calcFlexPercentage(offset, theme),
    position: props.position || 'relative',
    left: props.left || push && calcFlexPercentage(push, theme),
    right: props.left || pull && calcFlexPercentage(pull, theme),
    order,
  };
};

/**
 * Extension of `<Box>`. Child of `<Row>` with built in padding
 * and bootstrap-esque flexbox grid props. The number of columns
 * you can span correspond to the `theme.grid.columns` property.
 * Spacing between columns is controlled via `theme.grid.columnGap`.
 */
export const Col = styled(Box).attrs(colAttrs)({});
