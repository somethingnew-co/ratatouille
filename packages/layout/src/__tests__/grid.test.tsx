import React from 'react';
import { mountWithTheme, baseTheme } from '../../test/utils';
import { Grid, Box } from '..';
import 'jest-styled-components';

describe('Grid', () => {
  it('should render Grid', () => {
    const wrapper = mountWithTheme(<Grid>Hello World!</Grid>, baseTheme);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('should render Box', () => {
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
});

describe('Grid', () => {
  it('should have "display: flex" css property', () => {
    const wrapper = mountWithTheme(<Grid>Hello World!</Grid>, baseTheme);
    expect(wrapper).toHaveStyleRule('display', 'grid');
  });
  it('should accept grid props', () => {
    const wrapper = mountWithTheme(
      <Grid
        gridTemplateColumns={'1fr 2fr'}
        gridTemplateAreas='a b'
      >Hello World!</Grid>,
      baseTheme,
    );
    expect(wrapper).toHaveStyleRule('grid-template-columns', '1fr 2fr');
    expect(wrapper).toHaveStyleRule('grid-template-areas', 'a b');
  });
});

describe('Box', () => {
  it('should accept props', () => {
    const wrapper1 = mountWithTheme(<Box gridColumn="span 6">Hello World!</Box>, baseTheme);
    expect(wrapper1).toHaveStyleRule('grid-column', 'span 6');

    const wrapper2 = mountWithTheme(
      <Box gridColumn="1 / 7" gridRow={3}>Hello World!</Box>, baseTheme,
    );
    expect(wrapper2).toHaveStyleRule('grid-column', '1 / 7');
    expect(wrapper2).toHaveStyleRule('grid-row', '3');

    const wrapper3 = mountWithTheme(
      <Box gridColumn="3 / 9" gridRow='1 / 3'>Hello World!</Box>, baseTheme,
    );
    expect(wrapper3).toHaveStyleRule('grid-column', '3 / 9');
    expect(wrapper3).toHaveStyleRule('grid-row', '1 / 3');

    const wrapper4 = mountWithTheme(
      <Box gridColumn={'4 / span 9'} gridRow={'span 3'}>Hello World!</Box>, baseTheme,
    );
    expect(wrapper4).toHaveStyleRule('grid-column', '4 / span 9');
    expect(wrapper4).toHaveStyleRule('grid-row', 'span 3');
  });

  it('should accept responsive props', () => {
    const wrapper = mountWithTheme(
      <Box
        gridColumn={['1 / -1', '3 / -1', '5 / 9', '7 / 12']}
        gridRow={['1 / -1', '3 / -1', '5 / 9', '7 / 12']}
      >
        Hello World!
      </Box>,
      baseTheme,
    );

    expect(wrapper).toHaveStyleRule('grid-column', '1 / -1');
    expect(wrapper).toHaveStyleRule('grid-column', '3 / -1', {
      media: 'screen and (min-width: 40em)',
    });
    expect(wrapper).toHaveStyleRule('grid-column', '5 / 9', {
      media: 'screen and (min-width: 52em)',
    });
    expect(wrapper).toHaveStyleRule('grid-column', '7 / 12', {
      media: 'screen and (min-width: 64em)',
    });

    expect(wrapper).toHaveStyleRule('grid-row', '1 / -1');
    expect(wrapper).toHaveStyleRule('grid-row', '3 / -1', {
      media: 'screen and (min-width: 40em)',
    });
    expect(wrapper).toHaveStyleRule('grid-row', '5 / 9', {
      media: 'screen and (min-width: 52em)',
    });
    expect(wrapper).toHaveStyleRule('grid-row', '7 / 12', {
      media: 'screen and (min-width: 64em)',
    });
  });
});
