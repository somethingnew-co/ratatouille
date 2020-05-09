import React from 'react';
import { Box, Container } from '..';
import { mountWithTheme, baseTheme, responsiveTheme } from '../../test/utils';
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
});

describe('Container', () => {
  it('should render Container', () => {
    const wrapper = mountWithTheme(<Container as="main">Hello World!</Container>, baseTheme);
    expect(wrapper.containsMatchingElement(<main>Hello World!</main>)).toEqual(true);
  });

  it('should have max-width css prop from theme', () => {
    const wrapper = mountWithTheme(<Container as="main">Hello World!</Container>, baseTheme);
    expect(wrapper.containsMatchingElement(<main>Hello World!</main>)).toEqual(true);
    expect(wrapper).toHaveStyleRule('max-width', '960px');
    expect(wrapper).toHaveStyleRule('padding-left', '20px');
    expect(wrapper).toHaveStyleRule('padding-right', '20px');
  });

  it('should have responsive max-width', () => {
    const wrapper = mountWithTheme(<Container as="main">Hello World!</Container>, responsiveTheme);
    expect(wrapper.containsMatchingElement(<main>Hello World!</main>)).toEqual(true);
    expect(wrapper).toHaveStyleRule('max-width', '100%');
    expect(wrapper).toHaveStyleRule('max-width', `${String(responsiveTheme.grid.maxWidth[0])}`, {
      media: 'screen and (min-width: 40em)',
    });
    expect(wrapper).toHaveStyleRule('max-width', `${String(responsiveTheme.grid.maxWidth[1])}`, {
      media: 'screen and (min-width: 52em)',
    });
    expect(wrapper).toHaveStyleRule('max-width', `${String(responsiveTheme.grid.maxWidth[2])}`, {
      media: 'screen and (min-width: 64em)',
    });
  });
});
