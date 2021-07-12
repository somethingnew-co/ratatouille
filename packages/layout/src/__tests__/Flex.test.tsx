import React from 'react';
import { baseTheme, mountWithTheme } from '../../test/utils';
import { Flex } from '..';
import 'jest-styled-components';

describe('Flex', () => {
  it('should render Flex', () => {
    const wrapper = mountWithTheme(<Flex>Hello World!</Flex>, baseTheme);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
});

describe('Flex', () => {
  it('should have "display: flex" css property', () => {
    const wrapper = mountWithTheme(
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >Hello World!
      </Flex>, baseTheme,
    );
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('flex-direction', 'column');
    expect(wrapper).toHaveStyleRule('align-items', 'center');
    expect(wrapper).toHaveStyleRule('justify-content', 'space-between');
  });
});
