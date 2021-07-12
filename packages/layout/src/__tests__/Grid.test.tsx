import React from 'react';
import { baseTheme, mountWithTheme } from '../../test/utils';
import { Box, Grid } from '..';
import 'jest-styled-components';

describe('Grid', () => {
  it('should have "display: grid" css property', () => {
    const wrapper = mountWithTheme(<Grid>Hello World!</Grid>, baseTheme);
    expect(wrapper).toHaveStyleRule('display', 'grid');
  });

  it('should render Grid', () => {
    const wrapper = mountWithTheme(<Grid>Hello World!</Grid>, baseTheme);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });

  it('should render Box children', () => {
    const wrapper = mountWithTheme(
      <Grid>
        <Box>Hello World!</Box>
        <Box>Hola Mundo!</Box>
      </Grid>,
      baseTheme,
    );
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
    expect(wrapper.containsMatchingElement(<div>Hola Mundo!</div>)).toEqual(true);
  });

  it('should override defaults', () => {
    const wrapper = mountWithTheme(
      <Grid gridTemplateColumns="100px 100px" gridColumnGap="100px" />,
      baseTheme,
    );
    expect(wrapper).toHaveStyleRule('grid-template-columns', '100px 100px');
    expect(wrapper).toHaveStyleRule('grid-column-gap', '100px');
  });
});
