import React from 'react';
import { Container } from '..';
import { arrayTheme, baseTheme, mountWithTheme } from '../../test/utils';
import 'jest-styled-components';

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
    const wrapper = mountWithTheme(<Container as="main">Hello World!</Container>, arrayTheme);
    expect(wrapper.containsMatchingElement(<main>Hello World!</main>)).toEqual(true);
    expect(wrapper).toHaveStyleRule('max-width', '100%');
    expect(wrapper).toHaveStyleRule('max-width', `${String(arrayTheme.grid.maxWidth[0])}`, {
      media: `screen and (min-width: ${arrayTheme.breakpoints[0]})`,
    });
    expect(wrapper).toHaveStyleRule('max-width', `${String(arrayTheme.grid.maxWidth[1])}`, {
      media: `screen and (min-width: ${arrayTheme.breakpoints[1]})`,
    });
    expect(wrapper).toHaveStyleRule('max-width', `${String(arrayTheme.grid.maxWidth[2])}`, {
      media: `screen and (min-width: ${arrayTheme.breakpoints[2]})`,
    });
  });
});
