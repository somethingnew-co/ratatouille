// <Row>
import styled from 'styled-components';
import { Flex } from './Flex';
import { BoxProps } from './Box';
import { calcFlexGap } from './utils/flex';
import { Theme } from './utils/theme';

interface Row extends BoxProps {
  theme: Theme;
}

const rowAttrs = (props: Row): BoxProps => ({
  flexDirection: props.flexDirection || 'row',
  flexWrap: props.flexWrap || 'wrap',
  mx: props.mx || calcFlexGap(props.theme, -1),
});

/**
 * Extension of `<Flex>` with negative margins.
 * Intended to wrap `<Col>` components for bootstrap-style flexbox grid.
 * Margins are tied to the `theme.grid.columnGap` property.
 * `flex-direction: row` and `flex-wrap: wrap` are enabled by default.
 */
export const Row = styled(Flex).attrs(rowAttrs)``;
