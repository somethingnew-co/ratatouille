import styled from 'styled-components';
import { Box } from './Box';
import { BoxProps, ColProps } from './types';
import { calcSpan, calcColGutter, flexBasis } from './utils';

/**
 * Extension of `<Box>`. Child of `<Row>` with built in padding
 * and bootstrap-esque flexbox grid props. The number of columns
 * you can span correspond to the `theme.grid.columns` property.
 * Spacing between columns is controlled via `theme.grid.columnGap`.
 */
export const Col = styled(Box).attrs(({
  theme,
  span,
  push,
  pull,
  offset,
}: ColProps) => {
  const attrs: BoxProps = {
    flex: 1,
    maxWidth: '100%',
    position: 'relative',
    paddingX: calcColGutter(theme.grid.columnGap),
  };

  const colSpan = calcSpan(theme.grid.columns);

  if (span) {
    attrs.flex = flexBasis(colSpan(span));
    attrs.maxWidth = colSpan(span);
  }
  if (push) {
    attrs.left = colSpan(push);
  }
  if (pull) {
    attrs.right = colSpan(pull);
  }
  if (offset) {
    attrs.marginLeft = colSpan(offset);
  }

  return attrs;
})({});
