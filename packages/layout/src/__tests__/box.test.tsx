import React from 'react';
import { Box } from '..';
import { mountWithTheme, baseTheme } from '../../test/utils';
import 'jest-styled-components';

describe('Box', () => {
  it('should render Box', () => {
    const wrapper = mountWithTheme(<Box>Hello World!</Box>, baseTheme);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('should have styled-system props', () => {
    const wrapper = mountWithTheme(<Box
      color="blue"
      position="absolute"
      fontSize={20}
      width="50%"
      ml={20}
    >Hello World!</Box>, baseTheme);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
    expect(wrapper).toHaveStyleRule('color', 'blue');
    expect(wrapper).toHaveStyleRule('position', 'absolute');
    expect(wrapper).toHaveStyleRule('font-size', '20px');
    expect(wrapper).toHaveStyleRule('width', '50%');
    expect(wrapper).toHaveStyleRule('margin-left', '20px');
  });

  it('should accept flex properties', () => {
    const wrapper = mountWithTheme(<Box flex="1 1 auto">Hello World!</Box>, baseTheme);
    expect(wrapper).toHaveStyleRule('flex', '1 1 auto');
  });

  it('should accept grid props', () => {
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

  it('should accept responsive grid props', () => {
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
