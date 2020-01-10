import React from 'react';
import { mount } from 'enzyme';
import { Box, Container } from '..';
import { baseTheme, responsiveTheme } from '../utils/theme';
import { mountWithTheme } from '../../test/utils';
import 'jest-styled-components';

describe('Box', () => {
  it('should render Box', () => {
    const wrapper = mount(<Box>Hello World!</Box>);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('should have styled-system props', () => {
    const wrapper = mount(<Box
      color="blue"
      position="absolute"
      fontSize={20}
      width="50%"
      ml={20}
    >Hello World!</Box>);
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
    const wrapper = mount(<Container as="main">Hello World!</Container>);
    expect(wrapper.containsMatchingElement(<main>Hello World!</main>)).toEqual(true);
  });

  it('should have max-width css prop from theme', () => {
    const wrapper = mountWithTheme(<Container as="main">Hello World!</Container>, baseTheme);
    expect(wrapper.containsMatchingElement(<main>Hello World!</main>)).toEqual(true);
    expect(wrapper).toHaveStyleRule('max-width', '800px');
  });

  it('should have responsive max-width', () => {
    const wrapper = mountWithTheme(<Container as="main">Hello World!</Container>, responsiveTheme);
    expect(wrapper.containsMatchingElement(<main>Hello World!</main>)).toEqual(true);
    expect(wrapper).toHaveStyleRule('max-width', '100%');
    expect(wrapper).toHaveStyleRule('max-width', `${responsiveTheme.breakpoints[0]}px`, {
      media: `screen and (min-width: ${responsiveTheme.breakpoints[0]})`,
    });
    expect(wrapper).toHaveStyleRule('max-width', `${responsiveTheme.breakpoints[1]}px`, {
      media: `screen and (min-width: ${responsiveTheme.breakpoints[1]})`,
    });
    expect(wrapper).toHaveStyleRule('max-width', `${responsiveTheme.breakpoints[2]}px`, {
      media: `screen and (min-width: ${responsiveTheme.breakpoints[2]})`,
    });
  });
});
